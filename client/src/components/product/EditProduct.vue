<template lang="">
  <v-container>
    <v-alert
      border="left"
      close-text
      dismissible
      dark
      color="green accent-4"
      v-if="show"
    >
      Cập nhật thành công!
    </v-alert>
    <v-row justify="center">
      <v-col >
        <v-card>
          <v-card-title
            class="justify-content-center pt-5 primary white--text"
            color="text--darken-2"
          >
            <h3>Cập Nhật Thông Tin</h3>
          </v-card-title>

          <v-form
            ref="form"
            @submit.prevent="updateForm"
            filled
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="products.name"
              filled
              label="Tên sản phẩm"
              :rules="rules"
            >
            </v-text-field>
            <v-text-field
              v-model="products.qty"
              filled
              label="Số lượng"
              :rules="rules"
            >
            </v-text-field>
            <v-select
              v-model="products.category"
              :items="category"
              item-text="name"
              menu-props="auto"
              label="Chọn loại sản phẩm"
              item-value="_id"
              hide-details
              single-line
              filled
              class="pt-4 pb-5"
            >
            </v-select>
            <v-text-field
              filled
              v-model="products.price"
              label="Giá"
              :rules="rules"
            >
            </v-text-field>
            <v-textarea
              filled
              v-model="products.detail"
              label="Chi tiết"
            ></v-textarea>

            <v-file-input filled label="Chọn file" @change="selectFile">
            </v-file-input>
            <v-img :src="`/${products.image}`" width="120px"></v-img>
            <v-btn type="submit" class="primary white--text"
              >Cập nhật</v-btn
            >
            <div class="mb-10"></div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import API from "@/services/api.product";
import APICategory from "@/services/api.category";

export default {
  name: "add-pro",
  data() {
    return {
      rules: [(value) => !!value || "this field is requied"],
      products: {
        name: "",
        qty: "",
        price: "",
        category: "",
        detail: "",
        image: "",
      },
      category: [],
      image: "",
      show: false,
    };
  },
  async created() {
    const res = await API.getProductByID(this.$route.params.id);
    this.category = await APICategory.getAllCategory();
    this.products = res;
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },

  methods: {
    selectFile(file) {
      this.image = file;
    },
    async updateForm() {
      const formData = new FormData();

      formData.append("image", this.image);
      formData.append("name", this.products.name);
      formData.append("qty", this.products.qty);
      formData.append("category", this.products.category);
      formData.append("price", this.products.price);
      formData.append("detail", this.products.detail);
      formData.append("old_image", this.products.image);
      console.log(this.products.category);
      if (this.$refs.form.validate()) {
        const res = await API.updateProduct(this.$route.params.id, formData);
        if (res) {
          this.$router.push({
            name: "show-product",
            params: { message: "Cập nhật thành công!" },
          });
          // this.$router.go()
        }
      }
    },
  },
};
</script>
<style lang=""></style>

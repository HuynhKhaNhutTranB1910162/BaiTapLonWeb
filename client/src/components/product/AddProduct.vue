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
      Thêm thành công!
    </v-alert>
    <v-row justify="center">
      <v-col >
        <v-card>
          <v-card-title class="justify-content-center pt-5 primary white--text"
            color="text--darken-2"
          >
            <h3>Thêm Sản Phẩm</h3>
          </v-card-title>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="products.name"
              label="Tên sản phẩm"
              filled
              :rules="rules"
            >
            </v-text-field>
            <v-text-field
              v-model="products.qty"
              label="Số lượng"
              filled
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
              class="pb-5"
            >
            </v-select>
            <v-text-field
              v-model="products.price"
              filled
              label="Giá"
              :rules="rules"
            >
            </v-text-field>

            <v-textarea
              v-model="products.detail"
              filled
              label="Chi tiết"
            ></v-textarea>
            <v-file-input
              label="Chọn file"
              filled
              @change="selectFile"
              :rules="rules"
            >
            </v-file-input>
            <!-- <div class="btn"> -->
            <v-btn type="submit" class="primary"
              >Thêm</v-btn
            >
            <!-- </div> -->
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
      rules: [(value) => !!value || "this field is required"],
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
    this.category = await APICategory.getAllCategory();
    console.warn(this.category);
    for (const value of category) {
      console.warn(value.name);
    }
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
      // console.log(file);

      // console.log( file.target.files[0].name);
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.products.name);
      formData.append("category", this.products.category);
      formData.append("qty", this.products.qty);
      formData.append("price", this.products.price);
      formData.append("detail", this.products.detail);
      console.log(this.products.category);
      if (this.$refs.form.validate()) {
        const res = await API.addProduct(formData);
        if (res) {
          this.show = true;
          this.$refs.form.reset();
        }
      }
    },
  },
};
</script>
<style>
.btn {
  text-align: right;
  color: rgb(42, 165, 112);
  margin: 0px 10px 10px 0px;
}
</style>

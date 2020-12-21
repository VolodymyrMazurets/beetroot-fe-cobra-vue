<template>
  <div class="contacs">
    <the-title>Concatct Us</the-title>
    <h2 v-if="loading">Loading...</h2>
    <a-form :form="form" v-else>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="Name"
      >
        <a-input
          @change="
            (e) =>
              form.setFieldsValue({
                username: e.data,
              })
          "
          v-decorator="[
            'username',
            {
              rules: [
                { required: true, message: 'Please input your name' },
                {
                  min: 6,
                  message: 'Min lenght 6 letters',
                },
              ],
            },
          ]"
          placeholder="Please input your name"
        />
      </a-form-item>
      <a-form-item
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
        label="Nickname"
      >
        <a-input
          @change="
            (e) =>
              form.setFieldsValue({
                nickname: e.data,
              })
          "
          v-decorator="[
            'nickname',
            {
              rules: [
                { required: true, message: 'Please input your nickname' },
              ],
            },
          ]"
          placeholder="Please input your nickname"
        />
      </a-form-item>
      <a-form-item
        :label-col="formTailLayout.labelCol"
        :wrapper-col="formTailLayout.wrapperCol"
      >
        <a-button type="primary" @click="check">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <carousel
      autoplay
      navigationEnabled
      navigationNextLabel=">"
      navigationPrevLabel="<"
    >
      <slide v-for="item in 10" :key="item"> Slide {{ item }} Content </slide>
    </carousel>
    <the-section style="margin-bottom: 10px">
      <template #header>
        <button>Hello</button>
      </template>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum natus
      porro eveniet culpa dolor magni nesciunt animi recusandae, quos tempore.
      <template #footer>
        <button>Hello</button>
        <button>Close</button>
      </template>
    </the-section>
    <the-section>
      <template #footer>
        This is footer
      </template>
    </the-section>
  </div>
</template>
<script>
import axios from "axios";
import TheSection from "../components/common/TheSection";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default {
  name: "Contacts",
  components: {
    TheSection,
  },
  data() {
    return {
      loading: true,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
    };
  },
  methods: {
    check() {
      this.form.validateFields((err) => {
        console.log(err);
        if (!err) {
          const formData = this.form.getFieldsValue();
          axios({
            url: "https://hook.integromat.com/d3rvnys23qrwst4gvhb079wta8ev94mm",
            method: "post",
            data: formData,
          });
        }
      });
    },
  },
  mounted() {
    setTimeout(() => (this.loading = false), 3000);
  },
};
</script>
<style lang="scss"></style>

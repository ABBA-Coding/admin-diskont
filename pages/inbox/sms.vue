<template lang="html">
  <div>
    <el-form
      label-position="top"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <TitleBlock title="SMS Рассылка" :breadbrumb="['Маркетинг']" lastLink="SMS Рассылка">
        <div class="d-flex">
          <div
            class="add-btn add-header-btn add-header-btn-padding btn-primary"
            type="submit"
            @click="submitForm('ruleForm')"
          >
            Отправить
          </div>
        </div>
      </TitleBlock>
      <div class="container_xl">
        <div class="card_block-form py-5">
          <div
            class="d-flex justify-content-between align-items-center card_header card_tabs_padding"
          ></div>

          <div class="form-container">
            <div class="form-block required">
              <div><label for="character_group">Сообщение</label></div>
              <el-form-item prop="character_group">
                <el-input type="textarea" rows="10" placeholder="Введите техт"></el-input>
              </el-form-item>
            </div>
            <div class="form-block required">
              <div><label for="">Пользователь </label></div>
              <el-form-item prop="character_name">
                <el-input
                  v-model="ruleForm.character_name"
                  placeholder="Пользователь"
                ></el-input>
              </el-form-item>
            </div>
            <!-- <div class="form-block">
              <el-form-item label-position="top" label="Пользователь">
                <el-select
                  class="w-100"
                  v-model="ruleForm.character_group"
                  filterable
                  allow-create
                  placeholder="Выберите из списка"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div> -->
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>
<script>
import LayoutHeaderBtn from "../../components/form/Layout-header-btn.vue";
import TitleBlock from "../../components/Title-block.vue";
import Title from "../../components/Title.vue";

export default {
  layout: "toolbar",
  data() {
    return {
      activeName: "Русский",

      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      value: [],
      rules: {
        character_group: [
          {
            required: true,
            // message: "incorrec",
            trigger: "change",
          },
        ],
        character_name: [
          {
            required: true,
            // message: "incorrec",
            trigger: "change",
          },
        ],
      },
      ruleForm: {
        character_group: "",
        character_name: "",
        character_option: "",
      },
    };
  },
  methods: {
    handleClick(tab, event) {},
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
        } else {
          return false;
        }
      });
    },
    toAddProduct(val) {
      // this.$router.push("/catalog/add_products");
    },
    toBack() {
      this.$router.push("/catalog/characteristic");
    },
  },
  components: {
    Title,
    TitleBlock,
    LayoutHeaderBtn,
  },
};
</script>
<style lang=""></style>

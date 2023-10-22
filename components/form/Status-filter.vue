<template lang="html">
  <div class="input status-select">
    <el-select
      v-model="value"
      :placeholder="propPlaceholder || 'Статус'"
      @change="($event) => $emit('changeStatus', $event)"
    >
      <el-option
        v-for="item in propOptions || options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  props: ["propOptions", "propPlaceholder"],
  data() {
    return {
      options: [
        {
          value: 0,
          label: "All",
        },
        {
          value: "active",
          label: "Активный",
        },
        {
          value: "inactive",
          label: "Неактивный",
        },
      ],
      value: "",
    };
  },
};
</script>

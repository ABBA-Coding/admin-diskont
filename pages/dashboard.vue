<template>
  <div>
    <TitleBlock title="Dashboard" :breadbrumb="['Каталог']" lastLink="Dashboard">
      <div class="add-btn add-header-btn add-header-btn-padding btn-primary">
        Добавить
      </div>
    </TitleBlock>
    <div class="container_xl app-container">
      <div class="chart-grid">
        <div class="card_block py-5">
          <div class="price-title">
            <h1>Продажи в этом месяце</h1>
            <p>Пользователи со всех каналов</p>
          </div>
          <div class="price mb-5">
            <h1>0 <span>сум</span></h1>
          </div>
        </div>
        <div class="card_block py-5">
          <div class="price2-title">
            <h1>0</h1>
            <p>Пользователи со всех каналов</p>
          </div>
        </div>
        <div class="card_block py-5">
          <div class="price2-title">
            <h1>0</h1>
            <p>Пользователи со всех каналов</p>
          </div>
        </div>
      </div>
      <div class="card_block py-5">
        <section class="pt-4">
          <div class="chart">
            <apexchart
              width="100%"
              type="line"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBlock from "../components/Title-block.vue";
import BarChart from "./BarChart.vue";
import LineChart from "./LineChart.vue";
export default {
  components: { BarChart, TitleBlock, LineChart },
  layout: "toolbar",
  data() {
    return {
      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

<style scoped>
:deep(.chartjs-size-monitor) {
  position: relative;
}
.chart {
  width: 100%;
}
.chart-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 32px;
  color: rgba(54, 153, 255);
}
.price-title,
.price2-title {
  padding: 16px 0;
}
.price-title h1 {
  font-size: 1.275rem;
  color: #181c32;
  line-height: 1.2;
  font-weight: 600;
  font-family: "Poppins", Helvetica, "sans-serif";
}
.price-title p,
.price2-title p {
  font-family: "Poppins", Helvetica, "sans-serif";
  color: #b5b5c3;
  font-weight: 500;
  font-size: 1.075rem;
  margin-top: 0.25rem;
}
.price {
  padding-top: 26px;
}
.price h1,
.price2-title h1 {
  color: #3f4254;
  font-size: 2.5rem;
  letter-spacing: -0.115rem;
  line-height: 1;
  font-weight: 600;
  font-family: "Poppins", Helvetica, "sans-serif";
  display: flex;
  align-items: center;
}
.price h1 span {
  color: #b5b5c3;
  font-weight: 500;
  font-size: 1.25rem;
  margin-right: 0.25rem;
  margin-left: 0.5rem;
}
</style>

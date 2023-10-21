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
            <h1>Количество пользователей</h1>
            <p>Сколько человек зарегистрировалось за последний день</p>
          </div>
          <div class="price">
            <h1>0</h1>
          </div>
        </div>
        <div class="card_block py-5">
          <div class="price2-title">
            <p>Количество заказов</p>
            <h1>0</h1>
          </div>
        </div>
        <div class="card_block py-5">
          <div class="price2-title">
            <p>Пользователи со всех каналов</p>
            <h1>0</h1>
          </div>
        </div>
        <div class="card_block mt-0 py-5">
          <div class="price-title">
            <h1>Количество товаров</h1>
            <p>активных и неактивных</p>
          </div>
          <div class="price price-status">
            <h1>0</h1>
            <h1>0</h1>
          </div>
        </div>
        <div class="card_block mt-0 py-5">
          <div class="price2-title">
            <p>Пользователи со всех каналов</p>
            <h1>0</h1>
          </div>
        </div>
        <div class="card_block mt-0 py-5">
          <div class="price2-title">
            <p>Пользователи со всех каналов</p>
            <h1>0</h1>
          </div>
        </div>
      </div>
      <div class="dashboard-grid">
        <div class="card_block py-5">
          <section class="pt-4">
            <div class="chart">
              <apexchart
                width="100%"
                type="bar"
                :options="chartOptions"
                :series="series"
              ></apexchart>
            </div>
          </section>
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
        title: {
          text: 'Статистика диаграммы',
          align: 'left'
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
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
  grid-row-gap: 16px;
}
.price-title,
.price2-title {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  padding-top: 0;
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
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  grid-row: 8px;
}
.price-status {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.price-status h1:first-child {
  color: #18b3bd;
}
.price-status h1:last-child {
  color: #f65160;
}
</style>

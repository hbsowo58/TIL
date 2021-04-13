<template>
	<div class="example">
		<apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
	</div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
	name: "Hellowolrd",
	components: {
		apexcharts: VueApexCharts,
	},
data: function() {
    return {
      options: {},
      series: [44, 55, 41, 17, 15]
    }
  }
};
</script>
<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <div class="card-container">
    <Card class="custom-card">
      <template #header>
        <img alt="row crops" class="card-image" src="../assets/livestock.jpeg" />
      </template>
      <template #title>
        <h2>Livestock Management</h2>
      </template>
      <template #content>
        <p class="m-0">
          Keeping detailed notes on maintaining farm animals is crucial for ensuring their health and productivity. Regular records help track vaccinations, medical treatments, feeding schedules, and breeding cycles, enabling timely interventions and informed decisions. This practice also aids in identifying patterns or issues early, preventing potential outbreaks of disease. Additionally, accurate documentation supports compliance with regulatory requirements and enhances overall farm management efficiency. By maintaining comprehensive notes, farmers can optimize animal welfare, improve operational efficiency, and ultimately increase the profitability and sustainability of their farming operations.
        </p>
      </template>
    </Card>

    <Card class="custom-card">
      <template #header>
        <img alt="row crops" class="card-image" src="../assets/tractor.jpeg" />
      </template>
      <template #title>
        <h2>Equipment Management</h2>
      </template>
      <template #content>
        <p class="m-0">
          Keeping detailed notes on maintaining farm equipment is essential for ensuring operational efficiency and longevity of machinery. Regular documentation helps track maintenance schedules, repairs, and parts replacements, preventing unexpected breakdowns and costly downtime. By recording usage patterns and performance issues, farmers can identify potential problems early and address them proactively. This practice also aids in budgeting for future expenses and complying with safety regulations. Well-maintained equipment operates more efficiently, reducing fuel consumption and increasing productivity. Ultimately, meticulous record-keeping enhances the reliability and lifespan of farm machinery, contributing to the overall success and sustainability of farming operations.
        </p>
      </template>
    </Card>

    <Card class="custom-card">
      <template #header>
        <img alt="row crops" class="card-image" src="../assets/crops.jpeg" />
      </template>
      <template #title>
        <h2>Crop Management</h2>
      </template>
      <template #content>
        <p class="m-0">
          Keeping detailed notes on farming agriculture is vital for optimizing crop production and resource management. Accurate records of planting dates, soil conditions, weather patterns, and pest control measures enable farmers to make informed decisions and improve yields. This practice helps identify successful techniques and areas needing improvement, fostering continuous learning and adaptation. Additionally, thorough documentation supports compliance with agricultural regulations and enhances traceability, which is crucial for food safety. By maintaining comprehensive notes, farmers can better manage their resources, reduce waste, and increase the sustainability and profitability of their agricultural operations.
        </p>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  gap: 1rem; /* Space between cards */
}

.custom-card {
  width: 33%;
  border: 2px solid black;
  padding: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px; /* This will curve the edges */
}

.custom-card h2 {
  font-size: 1.5rem; /* Adjust the font size as needed */
  margin: 0;
}

.custom-card .m-0 {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.card-image {
  width: 75%; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Optional: to round the image corners */
}
</style>
<template>
  <div class="bg-white rounded p-5">
    <div class="grid grid-cols-5 gap-5">
      <div class="sm:col-span-2">
        <img class="w-64 rounded" src="/images/pp/aestetica.png" />
      </div>
      <div class="col-span-4 sm:col-span-3 font-mono">
        <h1 class="text-3xl">Yannis</h1>
        <table class="w-full">
          <tr>
            <td>Âge</td>
            <td>20 ans</td>
          </tr>
          <tr>
            <td>Travail</td>
            <td>Open Net Sàrl</td>
          </tr>
          <tr>
            <td>Profession</td>
            <td>Informaticien</td>
          </tr>
          <tr>
            <td>Ville</td>
            <td>Vevey, Suisse</td>
          </tr>
          <tr>
            <td>E-mail</td>
            <td>
              <a href="mailto:yannis@burkhalter.dev">yannis@burkhalter.dev</a>
            </td>
          </tr>
          <tr>
            <td>Discord</td>
            <td>aestetica#9521</td>
          </tr>
          <tr>
            <td>Langues</td>
            <td>🇫🇷 🇬🇧</td>
          </tr>
          <tr v-if="showFullMode">
            <td>Statut</td>
            <td>Célibataire</td>
          </tr>
          <tr>
            <td>Navigateur préféré</td>
            <td>Firefox</td>
          </tr>
          <tr>
            <td>...</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const showFullMode = import.meta.env.VITE_SHOW_FULL_MODE === "true"
</script>

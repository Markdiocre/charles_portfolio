<template>
  <RouterView />
</template>

<style>

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--black-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--violet-color);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #674ada;
}
</style>
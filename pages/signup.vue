<template lang="html">
  <div>
    <step1 v-if="$route.params.step === 'step1'"></step1>
    <step2 v-if="$route.params.step === 'step2'"></step2>
    <step3 v-if="$route.params.step === 'step3'"></step3>
  </div>
</template>

<script>
import step1 from '~/components/signup-step-1'
import step2 from '~/components/signup-step-2'
import step3 from '~/components/signup-step-3'
export default {
  props: ['step'],
  components: {
    step1,
    step2,
    step3
  },
  mounted () {
    console.log('PROPS', this.step)
  }
}
</script>

<style lang="css">
</style>

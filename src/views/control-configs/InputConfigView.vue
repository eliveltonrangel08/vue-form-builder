<template>
    <div>
      <div :class="styles.FORM.FORM_GROUP">
        <label>
          Has mask?
          <input type="checkbox" v-model="control.hasMask">
        </label>
        <div v-if="control.hasMask">
          <label>
            Mask format
            <p style="line-height: 0.8;">
              <code style="font-size: 8pt;">
                Usage example: ##.###-##
                <br/> #: Number (0-9)
                <br/> A: Letter in any case (a-z,A-Z)
                <br/> N: Number or letter (a-z,A-Z,0-9)
                <br/> X: Any symbol
              </code>
            </p>
          </label>
          <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.mask">
        </div>
      </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";

    export default {
        name: "InputConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        computed: {
            inputTypeAttributes() {
                return ['text', 'password', 'hidden']
            },
        }
    }
</script>

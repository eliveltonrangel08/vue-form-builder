<template>
    <SidebarToggleableContainer headline="Styling/Classes">
        <div :class="styles.FORM.FORM_GROUP">
            <label>Container Size Class</label>
            <select :class="styles.FORM.FORM_CONTROL" v-model="control.containerClass">
                <option v-for="(className, classID) in containerClasses"
                        :key="className"
                        :value="className">
                    {{classID}} ({{className}})
                </option>
            </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Container Additional Classes</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalContainerClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
          <label>Control Text Transform</label>
          <select :class="styles.FORM.FORM_CONTROL" v-model="control.textTransformClass">
            <option v-for="(className, classID) in textTransformClasses"
                    :key="className"
                    :value="className">
              {{classID}} ({{className}})
            </option>
          </select>
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Control Field Additional Classes</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalFieldClass">
        </div>

        <div :class="styles.FORM.FORM_GROUP">
            <label>Control-Label Additional Classes</label>
            <input type="text" :class="styles.FORM.FORM_CONTROL" v-model="control.additionalLabelClass">
        </div>
    </SidebarToggleableContainer>
</template>

<script>
    import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";
    import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";

    export default {
        name: "ControlStylingInformation",
        mixins: [STYLE_INJECTION_MIXIN],
        components: {SidebarToggleableContainer},
        props: {
            control: Object
        },

        computed: {
            containerClasses() {
                return this.styles.COLUMNS
            },
            textTransformClasses() {
              return this.styles.TEXT_TRANSFORM
            }
        }
    }
</script>

<style scoped>

</style>

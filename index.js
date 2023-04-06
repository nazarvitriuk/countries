const countries = [
    {
        "name": "Afghanistan"
    },
    {
        "name": "Algeria"
    },
    {
        "name": "Angola"
    },
    {
        "name": "Andorra"
    },
    {
        "name": "Albania"
    },
    {
        "name": "Argentina"
    },
    {
        "name": "Antigua and Barbuda"
    },
    {
        "name": "Armenia"
    },
    {
        "name": "Australia"
    },
    {
        "name": "Austria"
    },
    {
        "name": "Azerbaijan"
    },
    {
        "name": "Bahamas"
    },
    {
        "name": "Bahrain"
    },
    {
        "name": "Bangladesh"
    },
    {
        "name": "Barbados"
    },
    {
        "name": "Belarus"
    },
    {
        "name": "Belgium"
    },
    {
        "name": "Belize"
    },
]

Vue.component('country', {
    template: ('<div class="form__item" v-if="show && searched">' +
        '<label class="control control-checkbox">' + 
            '<span>{{ data.name }}</span>' +
            '<input v-model="isSelected" class="country-input" type="checkbox" />' +
            '<div class="control_indicator"></div>' +
        '</label>' +
   '</div>'),
    props: ['data', 'onlySelected', 'search'],
    data() {
      return {
        isSelected: false
      };
    },
    computed: {
        show() {
            return this.onlySelected ? this.isSelected : true
        },
        searched() {
            return this.search ? this.data.name.toLowerCase().includes(this.search.toLowerCase()) : true
        }
    }
  });

new Vue({
    el:"#root",
    data() {
        return {
            search: '',
            onlySelected: false,
            countries: countries
        }
    },
    methods: {
        clear() {
            location.reload()
        }
    }
});
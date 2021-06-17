Vue.createApp({
  data() {
    return {
      item: ['-', 9, 8, 7, '+', 6, 5, 4, '.', 3, 2, 1, 0, '*', '/'],
      displayValue: '',
    };
  },
  methods: {
    buttonShow(num) {
      this.displayValue = this.displayValue.toString();
      this.displayValue += num;
    },
    clear() {
      this.displayValue = '';
    },
    calc() {
      this.displayValue = Math.floor(eval(this.displayValue) * 100) / 100;
    },
    // croppedDisplayValue() {
    //   return this.displayValue.slice(0, 2)
    // },
    back() {
      if (this.displayValue) {
        this.displayValue = this.displayValue.substring(
          0,
          this.displayValue.length - 1
        );
      }
    },
    percent() {
      this.displayValue = this.displayValue / 100;
    },
  },
}).mount('#app');

console.log(equally);

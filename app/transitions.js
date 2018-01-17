export default function(){
    this.transition(
      this.fromRoute('index'),
      this.toRoute('sign-in'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}

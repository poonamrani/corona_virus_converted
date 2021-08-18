import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'demo';
  people: any = [];
  virusComposition: any = [];
  subsequence: any = [];
  subsequenceCheck: any = [];
  result: any = [];
  finalResults: any = [];
  showResults: boolean = false;
  peopleCount(evnt: any) {
    if (evnt.target.value >= 1 && evnt.target.value <= 10) {
      this.people = Array(parseInt(evnt.target.value)).fill(0).map((x, i) => i);
      console.log(this.people)
    } else {
      alert("Please enter the value between 1 to 10")
    }
  }

  getVirusComposition(evnt: any) {
    console.log(evnt.target.value)
    this.virusComposition = [...evnt.target.value];
    console.log('------', this.virusComposition)
  }

  VirusSubsequence(evnt: any) {
    console.log('virus', evnt.target.value)
    this.subsequenceCheck = [...evnt.target.value];
    console.log('hhh', this.subsequenceCheck)
    for (let i = 0; i < this.virusComposition.length; i++) {
      // Pick ending point
      for (let j = i; j < this.virusComposition.length; j++) {
        // Print subarray between current
        // starting and ending points
        for (let k = i; k < j; k++) {
          this.subsequence.push(this.virusComposition[k]);
        }
      }
    }
    let arrayIndex = 0;
    let sequenceIndex = 0;

    while (arrayIndex < this.subsequence.length && sequenceIndex < this.subsequenceCheck.length) {
      if (this.subsequenceCheck[sequenceIndex] === this.subsequence[arrayIndex]) {
        sequenceIndex++;
      }
      arrayIndex++;
    }
    if (sequenceIndex === this.subsequenceCheck.length) {
      this.finalResults.push("POSITIVE")
    } else {
      this.finalResults.push("NEGATIVE")
    }
  }

  OnSubmitHandler() {
    this.showResults = !this.showResults
  }

}

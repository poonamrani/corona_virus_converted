import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  people: any = [];
  virusComposition: any = [];
  subsequence: any = [];
  subsequenceCheck: any = [];
  result: any = [];
  finalResults: any = [];
  data: any = [];
  peopleCount(evnt: any) {
    if (evnt.target.value >= 1 && evnt.target.value <= 10) {
      this.people = Array(parseInt(evnt.target.value)).fill("").map((x, i) => "");
    } else {
      alert("Please enter the value between 1 to 10")
    }
  }

  addData = (event: any, index: any) => {
    const findIndex = this.data.findIndex((i: any) => i.index == index);
    if(findIndex == -1) {
      this.data.push({
        data: event.target.value,
        index: index,
      });
    } else {
      this.data = this.data.map((e: any, ind: any) => {
        if(ind == index) {
          e.data = event.target.value;
        }
        return e;
      });
    }
  }

  getVirusComposition(evnt: any) {
    this.virusComposition = [...evnt.target.value];
  }

  isValidSequence = (array: any, sequence: any) => {
    let index = 0;
    for(let i=0; i<array.length; i++){
      if(sequence[index] === array[i]){
        index++;
      }
    }
    return sequence.length === index;
  }

  VirusSubsequence(value: any) {
    const RESULT = this.isValidSequence(this.virusComposition, [...value]) ? "POSITIVE" : "NEGATIVE";
    this.finalResults.push(RESULT);
  }

  OnSubmitHandler() {
    this.finalResults = [];
    this.data.forEach((element: any) => {
      this.VirusSubsequence(element.data);
    });
  }

}

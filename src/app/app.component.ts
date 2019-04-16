import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  //untuk template driven
  formModel = {
    nama: "",
    umur: 0
  };

  //untuk reactive form
  myReactiveForm: FormGroup;

  form;

  ngOnInit() {
    console.log("initialize");

    this.myReactiveForm = new FormGroup({
      nama: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      umur: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(80)]),
      check: new FormControl(null, [Validators.requiredTrue])
    });

    this.myReactiveForm.valueChanges.subscribe(form => {
      this.form = form;
    });
  }

  get nama() {
    return this.myReactiveForm.get("nama");
  }

  get umur() {
    return this.myReactiveForm.get("umur");
  }

  get check() {
    return this.myReactiveForm.get("check");
  }

  //untuk template driven
  submit1() {
    console.log(this.formModel);
    alert("submitted!");
  }

  //untuk reactive form
  submit2() {
    alert("submitted!");
  }
}

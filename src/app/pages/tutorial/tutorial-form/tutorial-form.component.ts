import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Tutorial } from "../shared/tutorial.model";

declare var $: any;

@Component({
  selector: "app-tutorial-form",
  templateUrl: "./tutorial-form.component.html",
  styleUrls: ["./tutorial-form.component.css"]
})
export class TutorialFormComponent implements OnInit {
  tutorialForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.startSelect();
    this.loadTutorialForm();
    this.openModal();
  }

  startSelect = () => $(".ui.dropdown").dropdown();

  loadTutorialForm = () => {
    this.tutorialForm = this.formBuilder.group({
      title: ["",
        [
          Validators.required,
          Validators.maxLength(80),
          Validators.minLength(5)
        ]
      ],
      subject: ["",
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(5)
        ]
      ],
      observation: [""],
      categoryId: ["",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]
      ],
      subcategoryId: ["",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      content: ["", [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  };

  openModal() {
    $(".ui.modal")
      .modal({
        onHide: () => {
          $(".ui.modal")
            .modal({ closable: true })
            .modal("hide");
          this.router.navigate(["tutorial"]);
        },
        onApprove: () => this.printValues()
      })
      .modal("show");
  }

  printValues = () => console.log(Tutorial.fromJson(this.tutorialForm.value));
}

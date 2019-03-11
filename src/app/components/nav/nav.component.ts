import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "pubmed-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

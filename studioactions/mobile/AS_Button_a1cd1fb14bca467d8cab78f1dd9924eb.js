function AS_Button_a1cd1fb14bca467d8cab78f1dd9924eb(eventobject) {
    var self = this;
    this.view.flexMainTab1.homeBackground.opacity = 0;
    this.view.flexMainTab2.profileBackground.opacity = 0;
    this.view.flexMainTab3.reportBackground.opacity = 1;
    this.view.flexMainTab4.aboutBackground.opacity = 0;
    var ntf = new voltmx.mvc.Navigation("ReportPage");
    ntf.navigate();
}
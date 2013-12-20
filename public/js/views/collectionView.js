(function() {
  define(['collections/Items', 'views/Item'], function(Items, Item) {
    var Employee, EmployeeView, Employees, emptyListCaptionCollectionView;
    Employee = Backbone.Model.extend({});
    Employees = Backbone.Collection.extend({
      model: Employee
    });
    EmployeeView = Backbone.View.extend({
      template: _.template($("#test-template").html()),
      render: function() {
        var emp, html;
        emp = this.model.toJSON();
        html = this.template(emp);
        return this.$el.append(html);
      }
    });
    emptyListCaptionCollectionView = new Backbone.CollectionView({
      el: $("#testCollection"),
      selectable: true,
      selectMultiple: true,
      sortable: true,
      emptyListCaption: "There are no items in this list.",
      collection: new Employees(),
      modelView: EmployeeView
    });
    emptyListCaptionCollectionView.render();
    $("#delete").click(function() {
      var curSelectedModels;
      curSelectedModels = emptyListCaptionCollectionView.getSelectedModels();
      return emptyListCaptionCollectionView.collection.remove(curSelectedModels);
    });
    return $("#add").click(function() {
      return emptyListCaptionCollectionView.collection.add({
        firstName: "Super",
        lastName: "Sleuth"
      });
    });
  });

}).call(this);

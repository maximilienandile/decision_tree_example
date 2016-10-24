'use_strict'
var _ = require('lodash');

/**
* This function split our dataset and extract object that have the feature set to a specific value
* @method split_the_dataset_by_feature_and_value
* @param  {Array of Object}                               data    our dataset
* @param  {String}                               feature the name of the feature
* @param  {String or Number}                               value   the value of the feature to extract from the dataset
* @return  {Array of Object}                               value   the dataset without the objects that have the feature "feature" set to the value "value" & without the feature "feature" 
*/
var split_the_dataset_by_feature_and_value=function(data_set,feature,value){
  // we partition our array in order to isolate in the data
  // Objects that have the `feature` set to the right value
  var data_set


  var array_partitioned = _.filter(data_set, function(o) { return o[feature]==value; });
  // we then have to remove the feature from our objects
  var array_to_return = []


  array_partitioned.forEach(function(v){
    var new_object = {}
    _.forEach(v, function(value, key) {

        if(key!==feature){
          new_object[key]=value
        }
      });
    array_to_return.push(new_object)

  });

  return array_to_return
}
//split_the_dataset_by_feature_and_value(a,"has_a_house",0)
// returns
// [ { has_a_car: 1, has_children: 1, label: 'bon_emprunteur' },
//  { has_a_car: 0, has_children: 0, label: 'mauvais_emprunteur' },
//  { has_a_car: 0, has_children: 1, label: 'mauvais_emprunteur' } ]


module.exports = {
  split_the_dataset_by_feature_and_value:split_the_dataset_by_feature_and_value
}

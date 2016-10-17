var _ = require('lodash');

/**
 * This function is used to compute the Shannon Entropy
 * @method calculate_shannon_entropy
 * @param  {[Array]}                  data an array of data
 * @return {[Number]}                       The Shannon Entropy
 */
function calculate_shannon_entropy(data){

  // init the shannon Entropy
  var shannon_entropy = 0;
  // we get the number of entries in the array
  var length_of_data = data.length;
  // create an empty array to keep track of different labels
  var labels_counter = {}
  // we iterate through the array
  _.forEach(data, function(value, key) {
      // extract the label from the one data element
      var label_extracted = value[value.length-1];
      // check if this label is inside our label counter array
      if (label_extracted in labels_counter){
        // the element is inside our object increment its value
        labels_counter[label_extracted] +=1
      } else {
        labels_counter[label_extracted] = 1
      }
  });

  // We then iterate through our label counter object
  _.forEach(labels_counter, function(value, key) {
    // we get the frequency of the number of time a label occurs
    var p = parseFloat(value/length_of_data)
    // Caculate the entropy of a class and add it to the shannon_entropy variable
    shannon_entropy -= p * getBaseLog(2,p)

  })
  return shannon_entropy

}

/**
 * This function return the log of Y in base X
 * @method getBaseLog
 * @param  {Number}   x base
 * @param  {Number}   y number
 * @return {Number}     the log of Y in base X
 */
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

var a = [
  [1,2,1,1,"bon_emprunteur"],
  [1,2,1,1,"bon_emprunteur"],
  [2,2,1,2,"mauvais_emprunteur"],
  [0,2,1,2,"mauvais_emprunteur"],
  [0,0,1,0,"mauvais_emprunteur"]
]
calculate_shannon_entropy(a)
// returns 0.9709505944546686

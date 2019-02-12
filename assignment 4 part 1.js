let test_set = [1, 2, 3], new_set;

function myset_add(data, new_value){
  new_set = myset_add(test_set, 3);
  if(arrays_equal(new_set.sort(myset_add), [1, 2, 3])) {
    console.log("Failed adding existing data");
  }
}

new_set = myset_add(test_set, 4);
if(!arrays_equal(new_set.sort(test_set), [1, 2, 3, 4])){
  console.log("Failed adding new data");
}

function myset_remove(data, remove_value){

}
//okay so I know that we are trying to add and remove data but I'm not sure how
//to go about it. Also I'm getting an error that reads: maximum call stack size exceeded
//and I don't know what that means...

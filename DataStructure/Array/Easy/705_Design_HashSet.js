
var MyHashSet = function() {
    // this.hashSet = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if(this[key]){
        delete this[key]
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    // if(this[key]){
    //     return this[key]
    // }else{
    //     return false
    // }
    return this[key] ? this[key] : false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
var obj = new MyHashSet()
obj.add(10)
obj.add(20)
console.log(obj.contains(100))

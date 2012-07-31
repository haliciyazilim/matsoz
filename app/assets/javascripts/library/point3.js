/**
 * A 3d coordinate
 */
function Point3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;

	// Relative to camera coordinates
	this.tx;
	this.ty;
	this.tz;

	// Flattened coordinates
	this.fx;
	this.fy;
}

Point3.prototype.subtract = function(other) {
	return new Point3(
		this.x - other.x,
		this.y - other.y,		
		this.z - other.z
	);
}

Point3.prototype.add = function(other) {
	return new Point3(
		this.x + other.x,
		this.y + other.y,		
		this.z + other.z
	);
}

Point3.prototype.normalize = function(){
	return this.setLength(1);
}

Point3.prototype.norm = function(){
	return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

Point3.prototype.length = function(){
	return this.norm();
}

Point3.prototype.setLength = function(length){
	var factor = length/this.norm();
	
	this.x = this.x*factor;
	this.y = this.y*factor;
	this.z = this.z*factor;		
	
	return this;
}

Point3.prototype.cross = function(other){
	return new Point3(
		this.y*other.z - this.z*other.y,
		this.z*other.x - this.x*other.z,
		this.x*other.y - this.y*other.x 
	);
}

Point3.prototype.dot = function(other) {
	return this.x * other.x + this.y * other.y + this.z * other.z;
}

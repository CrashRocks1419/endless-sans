//playfield 480 units

var default_prog_bone_set = {
	next_time: 4,
	total_time: 5.5,
	bones: [
		[440, 336, 32, 256, -320],
		[440, 48, 32, 256, -320],
		[680, 336, 32, 256, -320],
		[680, 48, 32, 256, -320],
		[920, 336, 32, 256, -320],
		[920, 48, 32, 256, -320],
		[1160, 336, 32, 256, -320],
		[1160, 48, 32, 256, -320],
		[1400, 336, 32, 256, -320],
		[1400, 48, 32, 256, -320],
		[-440, 336, 32, 256, 320],
		[-440, 48, 32, 256, 320],
		[-680, 336, 32, 256, 320],
		[-680, 48, 32, 256, 320],
		[-920, 336, 32, 256, 320],
		[-920, 48, 32, 256, 320],
		[-1160, 336, 32, 256, 320],
		[-1160, 48, 32, 256, 320],
		[-1400, 336, 32, 256, 320],
		[-1400, 48, 32, 256, 320],
	],
	next_bone_sets: [
		// "1L", "1R", "2L", "2R", "3",
		"6"
	],
}; 



var prog_bone_set_1R = { // wave from the right
	next_time: 1.5,
	total_time: 2.5,
	bones: [
		[336, 352, 32, 256, -400],
		[368, 320, 32, 256, -400],
		[400, 288, 32, 256, -400],
		[432, 256, 32, 256, -400],
		[464, 256, 32, 256, -400],
		[496, 256, 32, 256, -400],
		[528, 256, 32, 256, -400],
		[560, 256, 32, 256, -400],
	],
	next_bone_sets: [
		"1L", "2L", "2R", "3", "4", "6"
	],
};

var prog_bone_set_1L = { // wave from the left
	next_time: 1.5,
	total_time: 2.5,
	bones: [
		[-336, 352, 32, 256, 400],
		[-368, 320, 32, 256, 400],
		[-400, 288, 32, 256, 400],
		[-432, 256, 32, 256, 400],
		[-464, 256, 32, 256, 400],
		[-496, 256, 32, 256, 400],
		[-528, 256, 32, 256, 400],
		[-560, 256, 32, 256, 400],
	],
	next_bone_sets: [
		"1R", "2L", "2R", "3", "4", "6"
	],
};

var prog_bone_set_2R = { // 2R
	next_time: 6,
	total_time: 8,
	bones: [
		[380, 336, 32, 256, -200],
		[540, 336, 32, 256, -200],
		[700, 336, 32, 256, -200],
		[860, 336, 32, 256, -200],
		[1020, 336, 32, 256, -200],
		[1180, 336, 32, 256, -200],

		[-380, 80, 32, 256, 200],
		[-540, 80, 32, 256, 200],
		[-700, 80, 32, 256, 200],
		[-860, 80, 32, 256, 200],
		[-1020, 80, 32, 256, 200],
		[-1180, 80, 32, 256, 200],
	],
	next_bone_sets: [
		"1R", "3", "6"
	],
};

var prog_bone_set_2L = { // 2L
	next_time: 6,
	total_time: 7.5,
	bones: [
		[380, 80, 32, 256, -200],
		[540, 80, 32, 256, -200],
		[700, 80, 32, 256, -200],
		[860, 80, 32, 256, -200],
		[1020, 80, 32, 256, -200],
		[1180, 80, 32, 256, -200],

		[-380, 336, 32, 256, 200],
		[-540, 336, 32, 256, 200],
		[-700, 336, 32, 256, 200],
		[-860, 336, 32, 256, 200],
		[-1020, 336, 32, 256, 200],
		[-1180, 336, 32, 256, 200],
	],
	next_bone_sets: [
		"1L", "3", "6"
	],
};

var prog_bone_set_3 = { // 3
	next_time: 0.8,
	total_time: 1,
	bones: [
		[336, 336, 32, 256, -400],
		[368, 336, 32, 256, -400],
		[400, 336, 32, 256, -400],
		[432, 336, 32, 256, -400],
		[464, 160, 32, 256, -400],
		[496, 160, 32, 256, -400],

		[-336, 336, 32, 256, 400],
		[-368, 336, 32, 256, 400],
		[-400, 336, 32, 256, 400],
		[-432, 336, 32, 256, 400],
		[-464, 160, 32, 256, 400],
		[-496, 160, 32, 256, 400],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R", "4", "6",
	],
};




// one-sided hurdles

var prog_bone_set_4 = {
	next_time: 0.8,
	total_time: 4.12,
	bones: [
		[336, 336, 32, 256, -320],
		[336, 48, 32, 256, -320],
		[636, 304, 32, 256, -320],
		[636, 16, 32, 256, -320],
		[936, 272, 32, 256, -320],
		[936, -16, 32, 256, -320],
		
		[-336, 336, 32, 256, 320],
		[-336, 48, 32, 256, 320],
		[-636, 304, 32, 256, 320],
		[-636, 16, 32, 256, 320],
		[-936, 272, 32, 256, 320],
		[-936, -16, 32, 256, 320],
		

	],
	next_bone_sets: [
		"1R"
	],
};


var prog_bone_set_6 = {
	next_time: 0.8,
	total_time: 3.1,
	bones: [
		[-496, 336, 32, 256, 480],
		[-336, 192, 32, 256, 480, "blue"],
		[496, 336, 32, 256, -480],
		[336, 192, 32, 256, -480, "blue"],
		[-1096, 336, 32, 256, 480],
		[-936, 192, 32, 256, 480, "blue"],
		[1096, 336, 32, 256, -480],
		[936, 192, 32, 256, -480, "blue"],
		
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R",
	],
};



var bone_sets = {
	"1R": prog_bone_set_1R,
	"1L": prog_bone_set_1L,
	"2R": prog_bone_set_2R,
	"2L": prog_bone_set_2L,
	"3": prog_bone_set_3,
	"4": prog_bone_set_4,
	"6": prog_bone_set_6,
}

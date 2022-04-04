<?php
	$items = [
		[
			'title' => 'man-dish',
			'price' => 100,
			'image' => 'dish1.jpg'
		],
		[
			'title' => 'grill',
			'price' => 50,
			'image' => 'grill.jpg'
		],
		[
			'title' => 'meal',
			'price' => 70,
			'image' => 'meal.jpg'
		],
		[
			'title' => 'rice',
			'price' => 80,
			'image' => 'rice.jpg'
		]
	];

	sleep(3);

	// header('Content-type: application/json');
	// echo json_encode($items);
	
	header('HTTP/1.0 403 Forbidden');
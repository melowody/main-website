
<?php
if (!($_POST['yes']) or !($_POST['no'])) {
	echo "Things are not set!!!";
}

$file = "../js/songs.json";

$json = json_decode(file_get_contents($file),TRUE);

foreach ($json as $key => $song) {
	if ($song['name'] == $_POST['yes']) {
		$json[$key]['votes'] += 1;
		$json[$key]['totalVotes'] += 1;
	} else if ($song['name'] == $_POST['no']) {
		$json[$key]['totalVotes'] += 1;
	}
}

echo "Output: " . file_put_contents($file, json_encode($json));

?>

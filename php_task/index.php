<html>
    <head>
        <title>Sort numbers</title>
    </head>
    <body>
           <?php
function groupConsecutiveNumbers($inputArray) {
    sort($inputArray);

    $result = array();
    $tempGroup = null;

    foreach ($inputArray as $number) {
        if ($tempGroup === null) {
            $tempGroup = [$number];
        } elseif ($number == end($tempGroup) + 1) {
            $tempGroup[] = $number;
        } else {
            $result[] = $tempGroup;
            $tempGroup = [$number];
        }
    }

    if (!empty($tempGroup)) {
        $result[] = $tempGroup;
    }

    return $result;
}

function formatGroups($groups) {
    $formattedGroups = array_map(function ($group) {
        $groupCount = count($group);

        if ($groupCount > 1) {
            return $group[0] . '-' . end($group);
        } else {
            return $group[0];
        }
    }, $groups);

    return implode(',', $formattedGroups);
}

function groupAndFormat($inputString) {
    $inputArray = str_split($inputString);
    $groupedNumbers = groupConsecutiveNumbers($inputArray);
    $formattedGroups = formatGroups($groupedNumbers);

    return $formattedGroups;
}

// Example usage
$inputString = "123568";
$formattedGroups = groupAndFormat($inputString);

// Display the formatted groups
echo $formattedGroups;  // Output: 1-3,5-6,8
?>
    </body>
</html>
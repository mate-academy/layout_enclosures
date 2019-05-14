report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_entire-document_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20190514-134114\\test_entire-document_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "test_entire-document_0_document_0_desktop.png",
        "label": "entire-document",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "96.31",
          "analysisTime": 156
        },
        "diffImage": "..\\bitmaps_test\\20190514-134114\\failed_diff_test_entire-document_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_single_block_0_qa-block_0_desktop.png",
        "test": "..\\bitmaps_test\\20190514-134114\\test_single_block_0_qa-block_0_desktop.png",
        "selector": "#qa-block",
        "fileName": "test_single_block_0_qa-block_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 6
          },
          "misMatchPercentage": "71.93",
          "analysisTime": 35
        },
        "diffImage": "..\\bitmaps_test\\20190514-134114\\failed_diff_test_single_block_0_qa-block_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_single_block_1_qa-block__n1_0_desktop.png",
        "test": "..\\bitmaps_test\\20190514-134114\\test_single_block_1_qa-block__n1_0_desktop.png",
        "selector": "#qa-block.__n1",
        "fileName": "test_single_block_1_qa-block__n1_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "error": "Reference file not found D:\\fe\\html\\layout_enclosures\\backstop_data\\bitmaps_reference\\test_single_block_1_qa-block__n1_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_single_block_2_qa-block__n2_0_desktop.png",
        "test": "..\\bitmaps_test\\20190514-134114\\test_single_block_2_qa-block__n2_0_desktop.png",
        "selector": "#qa-block.__n2",
        "fileName": "test_single_block_2_qa-block__n2_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "error": "Reference file not found D:\\fe\\html\\layout_enclosures\\backstop_data\\bitmaps_reference\\test_single_block_2_qa-block__n2_0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});
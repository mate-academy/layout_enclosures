report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_entire-document_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20190516-085405\\test_entire-document_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "test_entire-document_0_document_0_desktop.png",
        "label": "entire-document",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "engineErrorMsg": "net::ERR_INVALID_REDIRECT at http://localhost:8080",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -588
          },
          "misMatchPercentage": "5.30",
          "analysisTime": 132
        },
        "diffImage": "..\\bitmaps_test\\20190516-085405\\failed_diff_test_entire-document_0_document_0_desktop.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\test_single_block_0_qa-block_0_desktop.png",
        "test": "..\\bitmaps_test\\20190516-085405\\test_single_block_0_qa-block_0_desktop.png",
        "selector": "#qa-block",
        "fileName": "test_single_block_0_qa-block_0_desktop.png",
        "label": "single block",
        "requireSameDimensions": true,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "engineErrorMsg": "net::ERR_INVALID_REDIRECT at http://localhost:8080",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -118,
            "height": 6
          },
          "misMatchPercentage": "65.70",
          "analysisTime": 56
        },
        "diffImage": "..\\bitmaps_test\\20190516-085405\\failed_diff_test_single_block_0_qa-block_0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "test"
});
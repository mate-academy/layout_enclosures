report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document.png",
        "test": "../bitmaps_test/20191016-080827/Entire_document.png",
        "selector": "document",
        "fileName": "Entire_document.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "error": "Reference file not found /home/aleksey/projects/layout_enclosures/backstop_data/bitmaps_reference/Entire_document.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Single_block_with_id_qa-block.png",
        "test": "../bitmaps_test/20191016-080827/Single_block_with_id_qa-block.png",
        "selector": "#qa-block",
        "fileName": "Single_block_with_id_qa-block.png",
        "label": "Single block with id_qa-block\"",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/enclosures/",
        "expect": 0,
        "viewportLabel": "desktop",
        "error": "Reference file not found /home/aleksey/projects/layout_enclosures/backstop_data/bitmaps_reference/Single_block_with_id_qa-block.png"
      },
      "status": "fail"
    }
  ]
});
/**
 * Trasy związane z eksportem publikacji
 */

const express = require('express');
const exportController = require('../controllers/export.controller');

const router = express.Router();

router.post('/pdf', exportController.exportToPdf);
router.post('/epub', exportController.exportToEpub);
router.post('/markdown', exportController.exportToMarkdown);
router.post('/html', exportController.exportToHtml);

module.exports = router;

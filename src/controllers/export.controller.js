/**
 * Kontroler funkcji eksportu publikacji
 */

const { logger } = require('../utils/logger');
const ExportService = require('../services/export.service');

/**
 * Eksport do formatu PDF
 */
exports.exportToPdf = async (req, res, next) => {
  try {
    const { projectId, options } = req.body;
    
    // Walidacja danych wejściowych
    if (!projectId) {
      return res.status(400).json({ message: 'ID projektu jest wymagane' });
    }
    
    // Generowanie pliku PDF
    const pdfResult = await ExportService.generatePdf(projectId, options);
    
    // Ustawienie nagłówków odpowiedzi
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${pdfResult.filename}"`);
    
    // Wysłanie pliku
    res.status(200).send(pdfResult.content);
    logger.info(`Wyeksportowano projekt ID: ${projectId} do PDF`);
  } catch (error) {
    logger.error(`Błąd podczas eksportu do PDF: ${error.message}`);
    next(error);
  }
};

/**
 * Eksport do formatu EPUB
 */
exports.exportToEpub = async (req, res, next) => {
  try {
    const { projectId, options } = req.body;
    
    // Walidacja danych wejściowych
    if (!projectId) {
      return res.status(400).json({ message: 'ID projektu jest wymagane' });
    }
    
    // Generowanie pliku EPUB
    const epubResult = await ExportService.generateEpub(projectId, options);
    
    // Ustawienie nagłówków odpowiedzi
    res.setHeader('Content-Type', 'application/epub+zip');
    res.setHeader('Content-Disposition', `attachment; filename="${epubResult.filename}"`);
    
    // Wysłanie pliku
    res.status(200).send(epubResult.content);
    logger.info(`Wyeksportowano projekt ID: ${projectId} do EPUB`);
  } catch (error) {
    logger.error(`Błąd podczas eksportu do EPUB: ${error.message}`);
    next(error);
  }
};

/**
 * Eksport do formatu Markdown
 */
exports.exportToMarkdown = async (req, res, next) => {
  try {
    const { projectId, options } = req.body;
    
    // Walidacja danych wejściowych
    if (!projectId) {
      return res.status(400).json({ message: 'ID projektu jest wymagane' });
    }
    
    // Generowanie pliku Markdown
    const markdownResult = await ExportService.generateMarkdown(projectId, options);
    
    // Ustawienie nagłówków odpowiedzi
    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename="${markdownResult.filename}"`);
    
    // Wysłanie pliku
    res.status(200).send(markdownResult.content);
    logger.info(`Wyeksportowano projekt ID: ${projectId} do Markdown`);
  } catch (error) {
    logger.error(`Błąd podczas eksportu do Markdown: ${error.message}`);
    next(error);
  }
};

/**
 * Eksport do formatu HTML
 */
exports.exportToHtml = async (req, res, next) => {
  try {
    const { projectId, options } = req.body;
    
    // Walidacja danych wejściowych
    if (!projectId) {
      return res.status(400).json({ message: 'ID projektu jest wymagane' });
    }
    
    // Generowanie pliku HTML
    const htmlResult = await ExportService.generateHtml(projectId, options);
    
    // Ustawienie nagłówków odpowiedzi
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', `attachment; filename="${htmlResult.filename}"`);
    
    // Wysłanie pliku
    res.status(200).send(htmlResult.content);
    logger.info(`Wyeksportowano projekt ID: ${projectId} do HTML`);
  } catch (error) {
    logger.error(`Błąd podczas eksportu do HTML: ${error.message}`);
    next(error);
  }
};

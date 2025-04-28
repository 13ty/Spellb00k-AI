/**
 * Kontroler funkcji generowania treści
 */

const { logger } = require('../utils/logger');
const GeneratorService = require('../services/generator.service');

/**
 * Generowanie konspektu książki/manuala
 */
exports.generateOutline = async (req, res, next) => {
  try {
    const { topic, type, length, style, additionalInfo } = req.body;
    
    // Walidacja danych wejściowych
    if (!topic) {
      return res.status(400).json({ message: 'Temat jest wymagany' });
    }
    
    const outline = await GeneratorService.generateOutline(topic, type, length, style, additionalInfo);
    logger.info(`Wygenerowano konspekt dla tematu: ${topic}`);
    res.status(200).json(outline);
  } catch (error) {
    logger.error(`Błąd podczas generowania konspektu: ${error.message}`);
    next(error);
  }
};

/**
 * Generowanie pojedynczego rozdziału
 */
exports.generateChapter = async (req, res, next) => {
  try {
    const { projectId, chapterTitle, previousContent, outline, style } = req.body;
    
    // Walidacja danych wejściowych
    if (!projectId || !chapterTitle) {
      return res.status(400).json({ message: 'ID projektu i tytuł rozdziału są wymagane' });
    }
    
    const chapter = await GeneratorService.generateChapter(projectId, chapterTitle, previousContent, outline, style);
    logger.info(`Wygenerowano rozdział '${chapterTitle}' dla projektu ID: ${projectId}`);
    res.status(200).json(chapter);
  } catch (error) {
    logger.error(`Błąd podczas generowania rozdziału: ${error.message}`);
    next(error);
  }
};

/**
 * Generowanie całej książki/manuala
 */
exports.generateCompleteBook = async (req, res, next) => {
  try {
    const { projectId, outline, style, format } = req.body;
    
    // Walidacja danych wejściowych
    if (!projectId || !outline) {
      return res.status(400).json({ message: 'ID projektu i konspekt są wymagane' });
    }
    
    // Ta operacja może być długotrwała
    const job = await GeneratorService.startCompleteBookGeneration(projectId, outline, style, format);
    logger.info(`Rozpoczęto generowanie pełnej książki dla projektu ID: ${projectId}`);
    res.status(202).json({ 
      jobId: job.id,
      status: job.status,
      message: 'Generowanie książki rozpoczęte. Użyj endpoint /api/generator/status/:jobId, aby sprawdzić status.' 
    });
  } catch (error) {
    logger.error(`Błąd podczas inicjowania generowania książki: ${error.message}`);
    next(error);
  }
};

/**
 * Udoskonalanie istniejącej treści
 */
exports.refineContent = async (req, res, next) => {
  try {
    const { content, instructions, style } = req.body;
    
    // Walidacja danych wejściowych
    if (!content) {
      return res.status(400).json({ message: 'Treść do udoskonalenia jest wymagana' });
    }
    
    const refinedContent = await GeneratorService.refineContent(content, instructions, style);
    logger.info('Udoskonalono istniejącą treść');
    res.status(200).json({ refinedContent });
  } catch (error) {
    logger.error(`Błąd podczas udoskonalania treści: ${error.message}`);
    next(error);
  }
};

/**
 * Kontroler zarządzania projektami
 */

const { logger } = require('../utils/logger');
const ProjectService = require('../services/project.service');

/**
 * Tworzenie nowego projektu
 */
exports.createProject = async (req, res, next) => {
  try {
    const projectData = req.body;
    const project = await ProjectService.createProject(projectData);
    logger.info(`Utworzono nowy projekt: ${project.title}`);
    res.status(201).json(project);
  } catch (error) {
    logger.error(`Błąd podczas tworzenia projektu: ${error.message}`);
    next(error);
  }
};

/**
 * Pobieranie wszystkich projektów
 */
exports.getAllProjects = async (req, res, next) => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    logger.error(`Błąd podczas pobierania projektów: ${error.message}`);
    next(error);
  }
};

/**
 * Pobieranie projektu po ID
 */
exports.getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await ProjectService.getProjectById(id);
    if (!project) {
      return res.status(404).json({ message: 'Nie znaleziono projektu' });
    }
    res.status(200).json(project);
  } catch (error) {
    logger.error(`Błąd podczas pobierania projektu: ${error.message}`);
    next(error);
  }
};

/**
 * Aktualizacja projektu
 */
exports.updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectData = req.body;
    const updatedProject = await ProjectService.updateProject(id, projectData);
    if (!updatedProject) {
      return res.status(404).json({ message: 'Nie znaleziono projektu' });
    }
    logger.info(`Zaktualizowano projekt: ${updatedProject.title}`);
    res.status(200).json(updatedProject);
  } catch (error) {
    logger.error(`Błąd podczas aktualizacji projektu: ${error.message}`);
    next(error);
  }
};

/**
 * Usuwanie projektu
 */
exports.deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ProjectService.deleteProject(id);
    if (!result) {
      return res.status(404).json({ message: 'Nie znaleziono projektu' });
    }
    logger.info(`Usunięto projekt o ID: ${id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Błąd podczas usuwania projektu: ${error.message}`);
    next(error);
  }
};

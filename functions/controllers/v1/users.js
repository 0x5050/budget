/**
 *
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
const getAll = (req, res) => {
  return res.status(200).send('GET')
}
/**
 *
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
const create = (req, res) => {
  return res.status(201).send('POST')
}
/**
 *
 * @param {object} req
 * @param {object} res
 * @returns {object} updated reflection
 */
const update = (req, res) => {
  return res.status(200).send('PUT')
}
/**
 *
 * @param {object} req
 * @param {object} res
 * @returns {void} return statuc code 204
 */
const remove = (req, res) => {
  return res.status(204).send('DELETE')
}
module.exports = {
  getAll,
  create,
  update,
  remove
}
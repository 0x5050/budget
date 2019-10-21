export default {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  create(req, res) {
    return res.status(201).send('POST')
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    return res.status(200).send('GET')
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated reflection
   */
  update(req, res) {
    return res.status(200).send('PUT')
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  delete(req, res) {
    return res.status(204).send('DELETE')
  }
}

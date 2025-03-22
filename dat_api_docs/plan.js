/**
 * @openapi
 * /addplan:
 *   post:
 *     tags:
 *       - Plans
 *     summary: Add a new plan
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plan added successfully
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /deletePlan/{id}:
 *   delete:
 *     tags:
 *       - Plans
 *     summary: Delete a plan
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Plan deleted successfully
 *       400:
 *         description: Plan does not exist
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /updatePlan/{id}:
 *   put:
 *     tags:
 *       - Plans
 *     summary: Update an existing plan
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               details:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plan updated successfully
 *       404:
 *         description: Plan not found
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /getPlan:
 *   get:
 *     tags:
 *       - Plans
 *     summary: Get all plans
 *     responses:
 *       200:
 *         description: Successfully retrieved plans
 *       500:
 *         description: Internal server error
 */

/**
 * @openapi
 * /getPlan/{id}:
 *   get:
 *     tags:
 *       - Plans
 *     summary: Get a plan by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved plan
 *       400:
 *         description: Plan does not exist
 *       500:
 *         description: Internal server error
 */

// 회원 목록 조회 API 명세

/**
 * @swagger
 * /users:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     summary: 커피 목록 조회하기
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *            application/json:
 *               schema:
 *                   type: array
 *                   items:
 *                       properties:
 *                           email:
 *                               type: string
 *                               example: test@test.com
 *                           name:
 *                               type: string
 *                               example: 철수
 *                           phone:
 *                               type: string
 *                               example: 010-1234-1234
 *                           personal:
 *                               type: string
 *                               example: 000000-1212454
 *                           prefer:
 *                               type: string
 *                               example: 철수가 좋아하는 사이트
 */
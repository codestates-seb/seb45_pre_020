const data = [
  {
    post: {
      info: {
        user_id: 'question_user',
        postTitle: 'question_title',
        post_id: 1,
        createdAt: '2023.09.01',
        post_status: true,
        adopted: true,
        answerList: [
          {
            info: {
              user_id: 'answer_user',
              createdAt: '2023.09.01',
              modifiedAt: '2023.09.02',
              post_status: true,
              adopted: true,
              recommendCount: 3,
            },
            content: 'answer',
            type: 'answer',
            comment: [
              {
                info: { user_id: 'comment_user1', createdAt: '2023.09.01' },
                content: 'comment1',
                type: 'comment',
              },
              {
                info: { user_id: 'comment_user2', createdAt: '2023.09.01' },
                content: 'comment2',
                type: 'comment',
              },
            ],
          },
        ],
      },
      content: 'question',
      type: 'question',
    },
  },
  {
    post: {
      info: {
        user_id: 'question_user2',
        postTitle: 'question_title2',
        post_id: 2,
        createdAt: '2023.09.01',
        post_status: true,
        adopted: true,
        answerList: [
          {
            info: {
              user_id: 'answer_user2',
              createdAt: '2023.09.01',
              modifiedAt: '2023.09.02',
              post_status: true,
              adopted: true,
              recommendCount: 3,
            },
            content: 'answer2',
            type: 'answer',
            comment: [
              {
                info: { user_id: 'comment_user1', createdAt: '2023.09.01' },
                content: 'comment1',
                type: 'comment',
              },
              {
                info: { user_id: 'comment_user2', createdAt: '2023.09.01' },
                content: 'comment2',
                type: 'comment',
              },
            ],
          },
        ],
      },
      content: 'question',
      type: 'question',
    },
  },
];

export default data;

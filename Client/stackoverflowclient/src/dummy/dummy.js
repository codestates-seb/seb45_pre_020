const data = [
  {
    post: {
      info: {
        user_id: 'question_user',
        postTitle: 'question_title',
        post_id: 20,
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
              answer_id: 213,
            },
            content: 'answer',
            type: 'answer',
            comment: [
              {
                info: {
                  user_id: 'comment_user1',
                  createdAt: '2023.09.01',
                  post_status: true,
                  comment_id: 3,
                },
                content: 'comment1',
                type: 'comment',
              },
              {
                info: {
                  user_id: 'comment_user2',
                  createdAt: '2023.09.01',
                  post_status: true,
                  comment_id: 4,
                },
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
        post_id: 22,
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
              answer_id: 1,
            },
            content: 'answer2',
            type: 'answer',
            comment: [
              {
                info: {
                  user_id: 'comment_user1',
                  createdAt: '2023.09.01',
                  post_status: false,
                  comment_id: 12,
                },
                content: 'comment1',
                type: 'comment',
              },
              {
                info: {
                  user_id: 'comment_user2',
                  createdAt: '2023.09.01',
                  post_status: true,
                  comment_id: 2111,
                },
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

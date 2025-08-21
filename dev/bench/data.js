window.BENCHMARK_DATA = {
  "lastUpdate": 1755790744131,
  "repoUrl": "https://github.com/jacderida/autonomi",
  "entries": {
    "`safe files` benchmarks": [
      {
        "commit": {
          "author": {
            "email": "36204420+vphongph@users.noreply.github.com",
            "name": "vphongph",
            "username": "vphongph"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5dbfa4568e56b84035f1a1c0889722a36ffa38e",
          "message": "Merge pull request #2991 from mickvandijke/example-network-from-code\n\nchore: add a network spawner example",
          "timestamp": "2025-06-05T06:57:54Z",
          "tree_id": "1ce560c1ae4792eecbd57b02101e7a0a471e1a6d",
          "url": "https://github.com/jacderida/autonomi/commit/b5dbfa4568e56b84035f1a1c0889722a36ffa38e"
        },
        "date": 1749125852376,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 0.26196698962393844,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 1.2941911985931638,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 32.551795859988395,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mickvd99@gmail.com",
            "name": "Mick van Dijke",
            "username": "mickvandijke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c8a2c2439404bfdd2c0011092e025bb9ce76382",
          "message": "Merge pull request #2739 from mickvandijke/example-spawn-single-node\n\nchore: add spawn single node example",
          "timestamp": "2025-06-05T14:33:07Z",
          "tree_id": "f2200f6de6d00c507ab904118207df4887cfb39c",
          "url": "https://github.com/jacderida/autonomi/commit/1c8a2c2439404bfdd2c0011092e025bb9ce76382"
        },
        "date": 1749148591400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 0.2578305914901797,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 1.2715097782333489,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 32.14078470994467,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32ac621dd170ef681d4c68d7bf521931613ee67",
          "message": "Merge pull request #3154 from grumbach/uploads_using_streaming\n\nfeat(client): implement streaming downloads for file_download and fil…",
          "timestamp": "2025-08-08T13:26:23Z",
          "tree_id": "21fb6225af9aad10bff49c54883f3317b5379f84",
          "url": "https://github.com/jacderida/autonomi/commit/b32ac621dd170ef681d4c68d7bf521931613ee67"
        },
        "date": 1754758353928,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.571928702437935,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.489920228299482,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 26.88921120744059,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chriso83@protonmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39eb71ffd9b5b8938721e3a0a5f4146d22dda565",
          "message": "Merge pull request #3162 from maqi/streaming_upload_tryout\n\nusing stream_encryption during CI",
          "timestamp": "2025-08-14T21:32:54+01:00",
          "tree_id": "70aa478f412380102558356bb35b8922c175a1d4",
          "url": "https://github.com/jacderida/autonomi/commit/39eb71ffd9b5b8938721e3a0a5f4146d22dda565"
        },
        "date": 1755208609954,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.4887868269488855,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.729097908070125,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 27.32525717117403,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "RolandSherwin@protonmail.com",
            "name": "RolandSherwin",
            "username": "RolandSherwin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a38745fb78945477140db25305809fc0cd67188",
          "message": "Merge pull request #3164 from RolandSherwin/ci_race_fix\n\nfix(node): add and sync on the same thread",
          "timestamp": "2025-08-19T12:18:28Z",
          "tree_id": "be8a99ba7a83c9a524026960776abb59f806ca73",
          "url": "https://github.com/jacderida/autonomi/commit/3a38745fb78945477140db25305809fc0cd67188"
        },
        "date": 1755718071858,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.6425984895357066,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.08985113387817,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 26.74052150414509,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41a5b41d46057450b0edf1969576e3bd5066cfbc",
          "message": "Merge pull request #3159 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-21T14:16:32Z",
          "tree_id": "093da06d14fbf4be9275d80c5cface0099db92cf",
          "url": "https://github.com/jacderida/autonomi/commit/41a5b41d46057450b0edf1969576e3bd5066cfbc"
        },
        "date": 1755790661201,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.491008729213368,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.326668603330436,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 26.77909304133293,
            "unit": "MiB/s"
          }
        ]
      }
    ],
    "Node memory": [
      {
        "commit": {
          "author": {
            "email": "36204420+vphongph@users.noreply.github.com",
            "name": "vphongph",
            "username": "vphongph"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5dbfa4568e56b84035f1a1c0889722a36ffa38e",
          "message": "Merge pull request #2991 from mickvandijke/example-network-from-code\n\nchore: add a network spawner example",
          "timestamp": "2025-06-05T06:57:54Z",
          "tree_id": "1ce560c1ae4792eecbd57b02101e7a0a471e1a6d",
          "url": "https://github.com/jacderida/autonomi/commit/b5dbfa4568e56b84035f1a1c0889722a36ffa38e"
        },
        "date": 1749125989119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 88,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mickvd99@gmail.com",
            "name": "Mick van Dijke",
            "username": "mickvandijke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c8a2c2439404bfdd2c0011092e025bb9ce76382",
          "message": "Merge pull request #2739 from mickvandijke/example-spawn-single-node\n\nchore: add spawn single node example",
          "timestamp": "2025-06-05T14:33:07Z",
          "tree_id": "f2200f6de6d00c507ab904118207df4887cfb39c",
          "url": "https://github.com/jacderida/autonomi/commit/1c8a2c2439404bfdd2c0011092e025bb9ce76382"
        },
        "date": 1749148729924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 88,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32ac621dd170ef681d4c68d7bf521931613ee67",
          "message": "Merge pull request #3154 from grumbach/uploads_using_streaming\n\nfeat(client): implement streaming downloads for file_download and fil…",
          "timestamp": "2025-08-08T13:26:23Z",
          "tree_id": "21fb6225af9aad10bff49c54883f3317b5379f84",
          "url": "https://github.com/jacderida/autonomi/commit/b32ac621dd170ef681d4c68d7bf521931613ee67"
        },
        "date": 1754758428641,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 89,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chriso83@protonmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39eb71ffd9b5b8938721e3a0a5f4146d22dda565",
          "message": "Merge pull request #3162 from maqi/streaming_upload_tryout\n\nusing stream_encryption during CI",
          "timestamp": "2025-08-14T21:32:54+01:00",
          "tree_id": "70aa478f412380102558356bb35b8922c175a1d4",
          "url": "https://github.com/jacderida/autonomi/commit/39eb71ffd9b5b8938721e3a0a5f4146d22dda565"
        },
        "date": 1755208684148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 88,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "RolandSherwin@protonmail.com",
            "name": "RolandSherwin",
            "username": "RolandSherwin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a38745fb78945477140db25305809fc0cd67188",
          "message": "Merge pull request #3164 from RolandSherwin/ci_race_fix\n\nfix(node): add and sync on the same thread",
          "timestamp": "2025-08-19T12:18:28Z",
          "tree_id": "be8a99ba7a83c9a524026960776abb59f806ca73",
          "url": "https://github.com/jacderida/autonomi/commit/3a38745fb78945477140db25305809fc0cd67188"
        },
        "date": 1755718150695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 88,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41a5b41d46057450b0edf1969576e3bd5066cfbc",
          "message": "Merge pull request #3159 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-21T14:16:32Z",
          "tree_id": "093da06d14fbf4be9275d80c5cface0099db92cf",
          "url": "https://github.com/jacderida/autonomi/commit/41a5b41d46057450b0edf1969576e3bd5066cfbc"
        },
        "date": 1755790740996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 93,
            "unit": "MB"
          }
        ]
      }
    ],
    "Client memory": [
      {
        "commit": {
          "author": {
            "email": "36204420+vphongph@users.noreply.github.com",
            "name": "vphongph",
            "username": "vphongph"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5dbfa4568e56b84035f1a1c0889722a36ffa38e",
          "message": "Merge pull request #2991 from mickvandijke/example-network-from-code\n\nchore: add a network spawner example",
          "timestamp": "2025-06-05T06:57:54Z",
          "tree_id": "1ce560c1ae4792eecbd57b02101e7a0a471e1a6d",
          "url": "https://github.com/jacderida/autonomi/commit/b5dbfa4568e56b84035f1a1c0889722a36ffa38e"
        },
        "date": 1749125990427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 14,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 13,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mickvd99@gmail.com",
            "name": "Mick van Dijke",
            "username": "mickvandijke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c8a2c2439404bfdd2c0011092e025bb9ce76382",
          "message": "Merge pull request #2739 from mickvandijke/example-spawn-single-node\n\nchore: add spawn single node example",
          "timestamp": "2025-06-05T14:33:07Z",
          "tree_id": "f2200f6de6d00c507ab904118207df4887cfb39c",
          "url": "https://github.com/jacderida/autonomi/commit/1c8a2c2439404bfdd2c0011092e025bb9ce76382"
        },
        "date": 1749148730949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 14,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 13,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32ac621dd170ef681d4c68d7bf521931613ee67",
          "message": "Merge pull request #3154 from grumbach/uploads_using_streaming\n\nfeat(client): implement streaming downloads for file_download and fil…",
          "timestamp": "2025-08-08T13:26:23Z",
          "tree_id": "21fb6225af9aad10bff49c54883f3317b5379f84",
          "url": "https://github.com/jacderida/autonomi/commit/b32ac621dd170ef681d4c68d7bf521931613ee67"
        },
        "date": 1754758429772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 20,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 14,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chriso83@protonmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39eb71ffd9b5b8938721e3a0a5f4146d22dda565",
          "message": "Merge pull request #3162 from maqi/streaming_upload_tryout\n\nusing stream_encryption during CI",
          "timestamp": "2025-08-14T21:32:54+01:00",
          "tree_id": "70aa478f412380102558356bb35b8922c175a1d4",
          "url": "https://github.com/jacderida/autonomi/commit/39eb71ffd9b5b8938721e3a0a5f4146d22dda565"
        },
        "date": 1755208685257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 21,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 15,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "RolandSherwin@protonmail.com",
            "name": "RolandSherwin",
            "username": "RolandSherwin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a38745fb78945477140db25305809fc0cd67188",
          "message": "Merge pull request #3164 from RolandSherwin/ci_race_fix\n\nfix(node): add and sync on the same thread",
          "timestamp": "2025-08-19T12:18:28Z",
          "tree_id": "be8a99ba7a83c9a524026960776abb59f806ca73",
          "url": "https://github.com/jacderida/autonomi/commit/3a38745fb78945477140db25305809fc0cd67188"
        },
        "date": 1755718152542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 21,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 15,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41a5b41d46057450b0edf1969576e3bd5066cfbc",
          "message": "Merge pull request #3159 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-21T14:16:32Z",
          "tree_id": "093da06d14fbf4be9275d80c5cface0099db92cf",
          "url": "https://github.com/jacderida/autonomi/commit/41a5b41d46057450b0edf1969576e3bd5066cfbc"
        },
        "date": 1755790743289,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 21,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 15,
            "unit": "MB"
          }
        ]
      }
    ],
    "swarm_driver long handlings": [
      {
        "commit": {
          "author": {
            "email": "36204420+vphongph@users.noreply.github.com",
            "name": "vphongph",
            "username": "vphongph"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5dbfa4568e56b84035f1a1c0889722a36ffa38e",
          "message": "Merge pull request #2991 from mickvandijke/example-network-from-code\n\nchore: add a network spawner example",
          "timestamp": "2025-06-05T06:57:54Z",
          "tree_id": "1ce560c1ae4792eecbd57b02101e7a0a471e1a6d",
          "url": "https://github.com/jacderida/autonomi/commit/b5dbfa4568e56b84035f1a1c0889722a36ffa38e"
        },
        "date": 1749125991726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 4938,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 11013,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 2,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mickvd99@gmail.com",
            "name": "Mick van Dijke",
            "username": "mickvandijke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c8a2c2439404bfdd2c0011092e025bb9ce76382",
          "message": "Merge pull request #2739 from mickvandijke/example-spawn-single-node\n\nchore: add spawn single node example",
          "timestamp": "2025-06-05T14:33:07Z",
          "tree_id": "f2200f6de6d00c507ab904118207df4887cfb39c",
          "url": "https://github.com/jacderida/autonomi/commit/1c8a2c2439404bfdd2c0011092e025bb9ce76382"
        },
        "date": 1749148731943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 4788,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 11498,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 2,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qi.ma@maidsafe.net",
            "name": "maqi",
            "username": "maqi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32ac621dd170ef681d4c68d7bf521931613ee67",
          "message": "Merge pull request #3154 from grumbach/uploads_using_streaming\n\nfeat(client): implement streaming downloads for file_download and fil…",
          "timestamp": "2025-08-08T13:26:23Z",
          "tree_id": "21fb6225af9aad10bff49c54883f3317b5379f84",
          "url": "https://github.com/jacderida/autonomi/commit/b32ac621dd170ef681d4c68d7bf521931613ee67"
        },
        "date": 1754758430890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 12283,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 25576,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 2,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chriso83@protonmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39eb71ffd9b5b8938721e3a0a5f4146d22dda565",
          "message": "Merge pull request #3162 from maqi/streaming_upload_tryout\n\nusing stream_encryption during CI",
          "timestamp": "2025-08-14T21:32:54+01:00",
          "tree_id": "70aa478f412380102558356bb35b8922c175a1d4",
          "url": "https://github.com/jacderida/autonomi/commit/39eb71ffd9b5b8938721e3a0a5f4146d22dda565"
        },
        "date": 1755208686423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11104,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 22706,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 2,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "RolandSherwin@protonmail.com",
            "name": "RolandSherwin",
            "username": "RolandSherwin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a38745fb78945477140db25305809fc0cd67188",
          "message": "Merge pull request #3164 from RolandSherwin/ci_race_fix\n\nfix(node): add and sync on the same thread",
          "timestamp": "2025-08-19T12:18:28Z",
          "tree_id": "be8a99ba7a83c9a524026960776abb59f806ca73",
          "url": "https://github.com/jacderida/autonomi/commit/3a38745fb78945477140db25305809fc0cd67188"
        },
        "date": 1755718154411,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11707,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 24663,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 2,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
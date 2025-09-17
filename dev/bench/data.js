window.BENCHMARK_DATA = {
  "lastUpdate": 1758118952822,
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
          "id": "ca2da0658be359855938d70084bb0918fdd6dde5",
          "message": "Merge pull request #3167 from RolandSherwin/bootstrap_fix\n\nfix(bootstrap): dont overwrite self with peers from fs",
          "timestamp": "2025-08-22T11:50:34Z",
          "tree_id": "e2e7ac0ae20cd0e905b7d634b17d6588dfcff75e",
          "url": "https://github.com/jacderida/autonomi/commit/ca2da0658be359855938d70084bb0918fdd6dde5"
        },
        "date": 1755868847401,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.679007055091541,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.381743249336763,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 27.20520454951108,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chris.oneil@gmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19fe1cd5d2d5041fc474c41b122491d45c591fc9",
          "message": "Merge pull request #3165 from jacderida/ci-increase_file_test_coverage\n\nci: provide tests for covering all file types",
          "timestamp": "2025-08-23T11:08:44Z",
          "tree_id": "01dfbfe312dc66c9d7b59c888576ff72e03094d2",
          "url": "https://github.com/jacderida/autonomi/commit/19fe1cd5d2d5041fc474c41b122491d45c591fc9"
        },
        "date": 1755960154285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.729034997652956,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 8.862810543517332,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 27.26334799158971,
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
          "id": "ff0556631d6e76e062e9b540bcbf8e394f55dbec",
          "message": "Merge pull request #3169 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-28T10:55:32Z",
          "tree_id": "38885f3c04b41310d2d127cd133eff0ab183669b",
          "url": "https://github.com/jacderida/autonomi/commit/ff0556631d6e76e062e9b540bcbf8e394f55dbec"
        },
        "date": 1756419019606,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.742658417664366,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.241727876044376,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 26.5084674492711,
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
          "id": "90bf48b1473a02fef6d690fddab5d27455d542d6",
          "message": "Merge pull request #3160 from vphongph/docs-update-examples\n\ndocs: added scratchpad examples from docs and removed outdated examples",
          "timestamp": "2025-09-02T11:00:07Z",
          "tree_id": "9a0c838d9387787e7c0507da16c3550f143c605c",
          "url": "https://github.com/jacderida/autonomi/commit/90bf48b1473a02fef6d690fddab5d27455d542d6"
        },
        "date": 1756818846840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.6921539293665226,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 8.984853431301625,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 26.2866610022931,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anselmega@gmail.com",
            "name": "Anselme",
            "username": "grumbach"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a0f6018105c8acb75b3b7a22f9c46b0590c44a",
          "message": "Merge pull request #3202 from grumbach/various_api_cleanup\n\nchore: cleanup api",
          "timestamp": "2025-09-16T10:37:18Z",
          "tree_id": "f9930ab71f036fefacf0e9376fffbb7550cba0a2",
          "url": "https://github.com/jacderida/autonomi/commit/14a0f6018105c8acb75b3b7a22f9c46b0590c44a"
        },
        "date": 1758118876240,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.203225389644723,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.533045667763465,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 22.35597936900299,
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
          "id": "ca2da0658be359855938d70084bb0918fdd6dde5",
          "message": "Merge pull request #3167 from RolandSherwin/bootstrap_fix\n\nfix(bootstrap): dont overwrite self with peers from fs",
          "timestamp": "2025-08-22T11:50:34Z",
          "tree_id": "e2e7ac0ae20cd0e905b7d634b17d6588dfcff75e",
          "url": "https://github.com/jacderida/autonomi/commit/ca2da0658be359855938d70084bb0918fdd6dde5"
        },
        "date": 1755868925240,
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
            "email": "chris.oneil@gmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19fe1cd5d2d5041fc474c41b122491d45c591fc9",
          "message": "Merge pull request #3165 from jacderida/ci-increase_file_test_coverage\n\nci: provide tests for covering all file types",
          "timestamp": "2025-08-23T11:08:44Z",
          "tree_id": "01dfbfe312dc66c9d7b59c888576ff72e03094d2",
          "url": "https://github.com/jacderida/autonomi/commit/19fe1cd5d2d5041fc474c41b122491d45c591fc9"
        },
        "date": 1755960232739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 90,
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
          "id": "ff0556631d6e76e062e9b540bcbf8e394f55dbec",
          "message": "Merge pull request #3169 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-28T10:55:32Z",
          "tree_id": "38885f3c04b41310d2d127cd133eff0ab183669b",
          "url": "https://github.com/jacderida/autonomi/commit/ff0556631d6e76e062e9b540bcbf8e394f55dbec"
        },
        "date": 1756419097970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 90,
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
          "id": "90bf48b1473a02fef6d690fddab5d27455d542d6",
          "message": "Merge pull request #3160 from vphongph/docs-update-examples\n\ndocs: added scratchpad examples from docs and removed outdated examples",
          "timestamp": "2025-09-02T11:00:07Z",
          "tree_id": "9a0c838d9387787e7c0507da16c3550f143c605c",
          "url": "https://github.com/jacderida/autonomi/commit/90bf48b1473a02fef6d690fddab5d27455d542d6"
        },
        "date": 1756818927909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 90,
            "unit": "MB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anselmega@gmail.com",
            "name": "Anselme",
            "username": "grumbach"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a0f6018105c8acb75b3b7a22f9c46b0590c44a",
          "message": "Merge pull request #3202 from grumbach/various_api_cleanup\n\nchore: cleanup api",
          "timestamp": "2025-09-16T10:37:18Z",
          "tree_id": "f9930ab71f036fefacf0e9376fffbb7550cba0a2",
          "url": "https://github.com/jacderida/autonomi/commit/14a0f6018105c8acb75b3b7a22f9c46b0590c44a"
        },
        "date": 1758118952088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 91,
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
          "id": "ca2da0658be359855938d70084bb0918fdd6dde5",
          "message": "Merge pull request #3167 from RolandSherwin/bootstrap_fix\n\nfix(bootstrap): dont overwrite self with peers from fs",
          "timestamp": "2025-08-22T11:50:34Z",
          "tree_id": "e2e7ac0ae20cd0e905b7d634b17d6588dfcff75e",
          "url": "https://github.com/jacderida/autonomi/commit/ca2da0658be359855938d70084bb0918fdd6dde5"
        },
        "date": 1755868926741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 18,
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
            "email": "chris.oneil@gmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19fe1cd5d2d5041fc474c41b122491d45c591fc9",
          "message": "Merge pull request #3165 from jacderida/ci-increase_file_test_coverage\n\nci: provide tests for covering all file types",
          "timestamp": "2025-08-23T11:08:44Z",
          "tree_id": "01dfbfe312dc66c9d7b59c888576ff72e03094d2",
          "url": "https://github.com/jacderida/autonomi/commit/19fe1cd5d2d5041fc474c41b122491d45c591fc9"
        },
        "date": 1755960234171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 20,
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
          "id": "ff0556631d6e76e062e9b540bcbf8e394f55dbec",
          "message": "Merge pull request #3169 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-28T10:55:32Z",
          "tree_id": "38885f3c04b41310d2d127cd133eff0ab183669b",
          "url": "https://github.com/jacderida/autonomi/commit/ff0556631d6e76e062e9b540bcbf8e394f55dbec"
        },
        "date": 1756419099004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 20,
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
          "id": "90bf48b1473a02fef6d690fddab5d27455d542d6",
          "message": "Merge pull request #3160 from vphongph/docs-update-examples\n\ndocs: added scratchpad examples from docs and removed outdated examples",
          "timestamp": "2025-09-02T11:00:07Z",
          "tree_id": "9a0c838d9387787e7c0507da16c3550f143c605c",
          "url": "https://github.com/jacderida/autonomi/commit/90bf48b1473a02fef6d690fddab5d27455d542d6"
        },
        "date": 1756818929795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 19,
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
        "date": 1755790745521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11872,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 24840,
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
          "id": "ca2da0658be359855938d70084bb0918fdd6dde5",
          "message": "Merge pull request #3167 from RolandSherwin/bootstrap_fix\n\nfix(bootstrap): dont overwrite self with peers from fs",
          "timestamp": "2025-08-22T11:50:34Z",
          "tree_id": "e2e7ac0ae20cd0e905b7d634b17d6588dfcff75e",
          "url": "https://github.com/jacderida/autonomi/commit/ca2da0658be359855938d70084bb0918fdd6dde5"
        },
        "date": 1755868928299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10810,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 22277,
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
            "email": "chris.oneil@gmail.com",
            "name": "Chris O'Neil",
            "username": "jacderida"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19fe1cd5d2d5041fc474c41b122491d45c591fc9",
          "message": "Merge pull request #3165 from jacderida/ci-increase_file_test_coverage\n\nci: provide tests for covering all file types",
          "timestamp": "2025-08-23T11:08:44Z",
          "tree_id": "01dfbfe312dc66c9d7b59c888576ff72e03094d2",
          "url": "https://github.com/jacderida/autonomi/commit/19fe1cd5d2d5041fc474c41b122491d45c591fc9"
        },
        "date": 1755960235596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11710,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 24952,
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
          "id": "ff0556631d6e76e062e9b540bcbf8e394f55dbec",
          "message": "Merge pull request #3169 from maidsafe/dependabot/github_actions/actions/checkout-5\n\nchore(deps): bump actions/checkout from 4 to 5",
          "timestamp": "2025-08-28T10:55:32Z",
          "tree_id": "38885f3c04b41310d2d127cd133eff0ab183669b",
          "url": "https://github.com/jacderida/autonomi/commit/ff0556631d6e76e062e9b540bcbf8e394f55dbec"
        },
        "date": 1756419100113,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11853,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 24828,
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
          "id": "90bf48b1473a02fef6d690fddab5d27455d542d6",
          "message": "Merge pull request #3160 from vphongph/docs-update-examples\n\ndocs: added scratchpad examples from docs and removed outdated examples",
          "timestamp": "2025-09-02T11:00:07Z",
          "tree_id": "9a0c838d9387787e7c0507da16c3550f143c605c",
          "url": "https://github.com/jacderida/autonomi/commit/90bf48b1473a02fef6d690fddab5d27455d542d6"
        },
        "date": 1756818931674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 12658,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 26743,
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
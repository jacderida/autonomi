window.BENCHMARK_DATA = {
  "lastUpdate": 1767796016706,
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
          "id": "9219a4ad565c1d97a77ee4ad156b6dc983e96d26",
          "message": "Merge pull request #3210 from grumbach/fix_analyze_old_datamap\n\nfix: analyze for old datamap types",
          "timestamp": "2025-09-25T16:30:02Z",
          "tree_id": "87d78d87abf088d6ea0eaeb2aa43c79b3069528e",
          "url": "https://github.com/jacderida/autonomi/commit/9219a4ad565c1d97a77ee4ad156b6dc983e96d26"
        },
        "date": 1758828746697,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.1825876708003245,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.005719154490128,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 22.025060726944115,
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
          "id": "79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46",
          "message": "Merge pull request #3215 from maqi/avoid_unrecognized_DM_result_in_hanging\n\nfix: avoid unrecognized req/rsp DM result in hanging",
          "timestamp": "2025-09-29T16:16:05+01:00",
          "tree_id": "c6c8846960b3d7c2a2b9e2196549d484199b39a8",
          "url": "https://github.com/jacderida/autonomi/commit/79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46"
        },
        "date": 1759170979584,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.107457866735532,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 8.756100557878096,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 22.27313633552984,
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
          "id": "42e4500a3bc4f9531e686a2890abb6e61b26c149",
          "message": "Merge pull request #3226 from maidsafe/chore-alloy_publish_issue\n\nchore: bump `evmlib` to `0.4.4`",
          "timestamp": "2025-10-01T17:21:22+01:00",
          "tree_id": "545682b99c70573f11874ee52a83afe9e090f1cc",
          "url": "https://github.com/jacderida/autonomi/commit/42e4500a3bc4f9531e686a2890abb6e61b26c149"
        },
        "date": 1759350225577,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.282755616073974,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 9.161755405871343,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 22.17634636548955,
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
          "id": "8ae89414911d9ca9007df1d0ffd33a24576c224e",
          "message": "Merge pull request #3229 from jacderida/chore-remove_nightly_workflows\n\nchore: remove various nightly workflows",
          "timestamp": "2025-10-02T21:51:41+01:00",
          "tree_id": "0a5b9dc89a5345c509cb689534687d0900c6c71a",
          "url": "https://github.com/jacderida/autonomi/commit/8ae89414911d9ca9007df1d0ffd33a24576c224e"
        },
        "date": 1759501604184,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 2.268976085435644,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 8.901799589393963,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 22.149070262687193,
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
          "id": "5e42bfe0fe8972f519eb1762c80f613d3042aeae",
          "message": "Merge pull request #3283 from maqi/transformed_json\n\nfeat(ant): analyze output flatten json as well",
          "timestamp": "2025-10-31T22:59:13Z",
          "tree_id": "0db903418adc1fb8cf3f1ea99b46c381c671fce9",
          "url": "https://github.com/jacderida/autonomi/commit/5e42bfe0fe8972f519eb1762c80f613d3042aeae"
        },
        "date": 1762301632359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1130431281575088,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.39794100336592,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 7.030854912932442,
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
          "id": "01aef5794ab4d33560bc37c8886befb9a4f79a35",
          "message": "Merge pull request #3296 from RolandSherwin/recursive_analyze_public\n\nfix(ant): obtain the correct public archive addresses",
          "timestamp": "2025-11-08T12:37:50Z",
          "tree_id": "5f218c9fb2a81d86e8426aaf585799304afd09e3",
          "url": "https://github.com/jacderida/autonomi/commit/01aef5794ab4d33560bc37c8886befb9a4f79a35"
        },
        "date": 1762964674340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1062186751421685,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.3590076568776865,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.943810013876485,
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
          "id": "cf69006c64e534730ddab11cd5eaa0c7942c647c",
          "message": "Merge pull request #3301 from maqi/self_upgrade\n\nself restart",
          "timestamp": "2025-11-12T22:23:08Z",
          "tree_id": "ed348125b516ada31291743fdd63a9a967450ae0",
          "url": "https://github.com/jacderida/autonomi/commit/cf69006c64e534730ddab11cd5eaa0c7942c647c"
        },
        "date": 1762988270125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1037876740987749,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.33231071917735,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 7.023204977246485,
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
          "id": "66ec46ce23645a5e6c76f0005044de2a3b848297",
          "message": "Merge pull request #3299 from maqi/blind_scan\n\nfurther storage tracking facilities from the analyze tool",
          "timestamp": "2025-11-13T14:56:01Z",
          "tree_id": "f5d149922289ce9d088f4182af801f233e18e152",
          "url": "https://github.com/jacderida/autonomi/commit/66ec46ce23645a5e6c76f0005044de2a3b848297"
        },
        "date": 1763047234573,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.06655872045766,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.261365100257634,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.994405725806416,
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
          "id": "cb56629bee1598c22735fbad44af3e0d957303b9",
          "message": "Merge pull request #3313 from maqi/remove_upload_fallback_approach\n\nfix(client): remove upload fallback approach",
          "timestamp": "2025-11-20T16:31:59Z",
          "tree_id": "5e4c79ae61d01e96e7946d9a665bc027304d2ee0",
          "url": "https://github.com/jacderida/autonomi/commit/cb56629bee1598c22735fbad44af3e0d957303b9"
        },
        "date": 1763767971214,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.0573583306323309,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.995666200565575,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.755856165478899,
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
          "id": "b762a2e7aa97a7ba1a6c0bb637937578aa30377b",
          "message": "Merge pull request #3316 from jacderida/chore-new_clippy_fixes\n\nchore: upgrade `assert_cmd` reference",
          "timestamp": "2025-11-24T09:47:13Z",
          "tree_id": "15379df4172a3270c7e0cfb4b6fa6eb14d765245",
          "url": "https://github.com/jacderida/autonomi/commit/b762a2e7aa97a7ba1a6c0bb637937578aa30377b"
        },
        "date": 1764006695618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1143677773922667,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.357923671709903,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 7.022136236677738,
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
          "id": "4217a797dbf5e5a1df1a844998897ae7743a9f8c",
          "message": "Merge pull request #3282 from maidsafe/tweak_replication_criterias\n\nexpand replication range and fall-back network side replication",
          "timestamp": "2025-11-25T13:34:10Z",
          "tree_id": "0140d48354dee14db475b0301d301ad02b7371ea",
          "url": "https://github.com/jacderida/autonomi/commit/4217a797dbf5e5a1df1a844998897ae7743a9f8c"
        },
        "date": 1764080221392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.136529458400912,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.079990687458232,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 7.014702186240326,
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
          "id": "48bce6fe350208dc66245d5ce5f1924362944424",
          "message": "Merge pull request #3314 from maidsafe/dependabot/github_actions/actions/checkout-6\n\nchore(deps): bump actions/checkout from 5 to 6",
          "timestamp": "2025-11-26T12:11:07Z",
          "tree_id": "82e585d9c7c20ccd7c772ecc9869ea072e3c3cd1",
          "url": "https://github.com/jacderida/autonomi/commit/48bce6fe350208dc66245d5ce5f1924362944424"
        },
        "date": 1764203662760,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1217066693030542,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.603732426278683,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 7.030412567524023,
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
          "id": "693b3922a721814b56c31bf33eec58bc17dcf048",
          "message": "Merge pull request #3326 from maidsafe/rc-2025.11.2\n\nchore(release): stable release `2025.11.2.1`",
          "timestamp": "2025-11-27T20:55:07Z",
          "tree_id": "683a139cd5efbabccf341aba7873b4860c4b6fba",
          "url": "https://github.com/jacderida/autonomi/commit/693b3922a721814b56c31bf33eec58bc17dcf048"
        },
        "date": 1764278976777,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.0806667477837821,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.986264261756268,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.6657424031870836,
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
          "id": "dfc9800a4dae391893b1f0488f9cc6e0b4a35c21",
          "message": "Merge pull request #3328 from maidsafe/fix-bump_autonomi\n\nBump Crates",
          "timestamp": "2025-11-27T23:31:23Z",
          "tree_id": "ef0299a82fc77817879e4c28feab2f7a4ba7dcc6",
          "url": "https://github.com/jacderida/autonomi/commit/dfc9800a4dae391893b1f0488f9cc6e0b4a35c21"
        },
        "date": 1764356295395,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1054175250682594,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.022039089750555,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 7.006672901328753,
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
          "id": "97af816ddac226a91d9b204677408264bdbedfb8",
          "message": "Merge pull request #3332 from jacderida/chore-python_publish_fixes\n\nfix(ci): Rewrite Python publish workflow following maturin best practices",
          "timestamp": "2025-11-28T19:24:09Z",
          "tree_id": "df5a19b50d2e7a281902c66a86998d14f46857e7",
          "url": "https://github.com/jacderida/autonomi/commit/97af816ddac226a91d9b204677408264bdbedfb8"
        },
        "date": 1764358760780,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.1037408124840347,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 6.335593020859831,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.691254178399807,
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
          "id": "c15af5a0ed3e0923beea90fe4d77e23f9c10ea54",
          "message": "Merge pull request #3357 from maidsafe/rc-2025.12.1\n\nchore(release): stable release 2025.12.1.1",
          "timestamp": "2025-12-11T22:21:12Z",
          "tree_id": "14072c198c646ce0b91ed4ba42b9cc8212775029",
          "url": "https://github.com/jacderida/autonomi/commit/c15af5a0ed3e0923beea90fe4d77e23f9c10ea54"
        },
        "date": 1765741637400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.0661100405504165,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.679834300410486,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.6529198032894445,
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
          "id": "657fa976183f04a808cf08d3beb1553a44f24a29",
          "message": "Merge pull request #3373 from maqi/make_get_storage_proofs_from_peer_return_PaymentQuote_for_release\n\nchore(client): make get_storage_proofs_from_peer return PaymentQuote",
          "timestamp": "2025-12-17T16:05:29Z",
          "tree_id": "46d2986dffb96061b7220ca0ceb575f96473dfd7",
          "url": "https://github.com/jacderida/autonomi/commit/657fa976183f04a808cf08d3beb1553a44f24a29"
        },
        "date": 1766011807168,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.077877095841727,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.9469555105321055,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.953383487001881,
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
          "id": "d7fe852c8660e8560a40062bf7b3e14e9cce5d35",
          "message": "Merge pull request #3384 from maqi/mutable_data_fall_back_DM_fetch\n\nfeat(client): using req/rsp DM as a fallback during mutable_data fetch",
          "timestamp": "2025-12-23T23:27:20Z",
          "tree_id": "2200bf0658f414052964b6eaebebc5095fd6aaed",
          "url": "https://github.com/jacderida/autonomi/commit/d7fe852c8660e8560a40062bf7b3e14e9cce5d35"
        },
        "date": 1766943116750,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.0794789053609468,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.799422973588718,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.63043993758821,
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
          "id": "2822430d8c752a7684fb2700745917d38b7f9563",
          "message": "Merge pull request #3391 from maqi/remove_peer_when_failed_to_fetch_version\n\nfeat(node): remove peer when failed to fetch version",
          "timestamp": "2026-01-05T13:01:01Z",
          "tree_id": "e1cde438f620b4e84a9ae6d489caf433002d3270",
          "url": "https://github.com/jacderida/autonomi/commit/2822430d8c752a7684fb2700745917d38b7f9563"
        },
        "date": 1767711813287,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.0893379219494286,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.871100694537198,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.922835895096657,
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
          "id": "1a4f46658ee2ec941e21d68baa6a90fe6e4318c4",
          "message": "Merge pull request #3376 from mickvandijke/feat-analytical-tools\n\nfeat: add developer query `closest-peers`",
          "timestamp": "2026-01-07T13:10:23Z",
          "tree_id": "a378e2fe33a70f13be8d887cc3d47c7a4f950e9b",
          "url": "https://github.com/jacderida/autonomi/commit/1a4f46658ee2ec941e21d68baa6a90fe6e4318c4"
        },
        "date": 1767795920619,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "ant files upload 1mb",
            "value": 1.0378615264111934,
            "unit": "MiB/s"
          },
          {
            "name": "ant files upload 10mb",
            "value": 5.796894395633314,
            "unit": "MiB/s"
          },
          {
            "name": "ant files download",
            "value": 6.60725292508234,
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
          "id": "9219a4ad565c1d97a77ee4ad156b6dc983e96d26",
          "message": "Merge pull request #3210 from grumbach/fix_analyze_old_datamap\n\nfix: analyze for old datamap types",
          "timestamp": "2025-09-25T16:30:02Z",
          "tree_id": "87d78d87abf088d6ea0eaeb2aa43c79b3069528e",
          "url": "https://github.com/jacderida/autonomi/commit/9219a4ad565c1d97a77ee4ad156b6dc983e96d26"
        },
        "date": 1758828826482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 86,
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
          "id": "79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46",
          "message": "Merge pull request #3215 from maqi/avoid_unrecognized_DM_result_in_hanging\n\nfix: avoid unrecognized req/rsp DM result in hanging",
          "timestamp": "2025-09-29T16:16:05+01:00",
          "tree_id": "c6c8846960b3d7c2a2b9e2196549d484199b39a8",
          "url": "https://github.com/jacderida/autonomi/commit/79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46"
        },
        "date": 1759171055654,
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
          "id": "42e4500a3bc4f9531e686a2890abb6e61b26c149",
          "message": "Merge pull request #3226 from maidsafe/chore-alloy_publish_issue\n\nchore: bump `evmlib` to `0.4.4`",
          "timestamp": "2025-10-01T17:21:22+01:00",
          "tree_id": "545682b99c70573f11874ee52a83afe9e090f1cc",
          "url": "https://github.com/jacderida/autonomi/commit/42e4500a3bc4f9531e686a2890abb6e61b26c149"
        },
        "date": 1759350301426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 86,
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
          "id": "8ae89414911d9ca9007df1d0ffd33a24576c224e",
          "message": "Merge pull request #3229 from jacderida/chore-remove_nightly_workflows\n\nchore: remove various nightly workflows",
          "timestamp": "2025-10-02T21:51:41+01:00",
          "tree_id": "0a5b9dc89a5345c509cb689534687d0900c6c71a",
          "url": "https://github.com/jacderida/autonomi/commit/8ae89414911d9ca9007df1d0ffd33a24576c224e"
        },
        "date": 1759501679815,
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
          "id": "5e42bfe0fe8972f519eb1762c80f613d3042aeae",
          "message": "Merge pull request #3283 from maqi/transformed_json\n\nfeat(ant): analyze output flatten json as well",
          "timestamp": "2025-10-31T22:59:13Z",
          "tree_id": "0db903418adc1fb8cf3f1ea99b46c381c671fce9",
          "url": "https://github.com/jacderida/autonomi/commit/5e42bfe0fe8972f519eb1762c80f613d3042aeae"
        },
        "date": 1762301713283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 195,
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
          "id": "01aef5794ab4d33560bc37c8886befb9a4f79a35",
          "message": "Merge pull request #3296 from RolandSherwin/recursive_analyze_public\n\nfix(ant): obtain the correct public archive addresses",
          "timestamp": "2025-11-08T12:37:50Z",
          "tree_id": "5f218c9fb2a81d86e8426aaf585799304afd09e3",
          "url": "https://github.com/jacderida/autonomi/commit/01aef5794ab4d33560bc37c8886befb9a4f79a35"
        },
        "date": 1762964755561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 183,
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
          "id": "cf69006c64e534730ddab11cd5eaa0c7942c647c",
          "message": "Merge pull request #3301 from maqi/self_upgrade\n\nself restart",
          "timestamp": "2025-11-12T22:23:08Z",
          "tree_id": "ed348125b516ada31291743fdd63a9a967450ae0",
          "url": "https://github.com/jacderida/autonomi/commit/cf69006c64e534730ddab11cd5eaa0c7942c647c"
        },
        "date": 1762988347392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 179,
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
          "id": "66ec46ce23645a5e6c76f0005044de2a3b848297",
          "message": "Merge pull request #3299 from maqi/blind_scan\n\nfurther storage tracking facilities from the analyze tool",
          "timestamp": "2025-11-13T14:56:01Z",
          "tree_id": "f5d149922289ce9d088f4182af801f233e18e152",
          "url": "https://github.com/jacderida/autonomi/commit/66ec46ce23645a5e6c76f0005044de2a3b848297"
        },
        "date": 1763047322067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 201,
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
          "id": "cb56629bee1598c22735fbad44af3e0d957303b9",
          "message": "Merge pull request #3313 from maqi/remove_upload_fallback_approach\n\nfix(client): remove upload fallback approach",
          "timestamp": "2025-11-20T16:31:59Z",
          "tree_id": "5e4c79ae61d01e96e7946d9a665bc027304d2ee0",
          "url": "https://github.com/jacderida/autonomi/commit/cb56629bee1598c22735fbad44af3e0d957303b9"
        },
        "date": 1763768057243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 202,
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
          "id": "b762a2e7aa97a7ba1a6c0bb637937578aa30377b",
          "message": "Merge pull request #3316 from jacderida/chore-new_clippy_fixes\n\nchore: upgrade `assert_cmd` reference",
          "timestamp": "2025-11-24T09:47:13Z",
          "tree_id": "15379df4172a3270c7e0cfb4b6fa6eb14d765245",
          "url": "https://github.com/jacderida/autonomi/commit/b762a2e7aa97a7ba1a6c0bb637937578aa30377b"
        },
        "date": 1764006781449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 183,
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
          "id": "4217a797dbf5e5a1df1a844998897ae7743a9f8c",
          "message": "Merge pull request #3282 from maidsafe/tweak_replication_criterias\n\nexpand replication range and fall-back network side replication",
          "timestamp": "2025-11-25T13:34:10Z",
          "tree_id": "0140d48354dee14db475b0301d301ad02b7371ea",
          "url": "https://github.com/jacderida/autonomi/commit/4217a797dbf5e5a1df1a844998897ae7743a9f8c"
        },
        "date": 1764080304393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 229,
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
          "id": "48bce6fe350208dc66245d5ce5f1924362944424",
          "message": "Merge pull request #3314 from maidsafe/dependabot/github_actions/actions/checkout-6\n\nchore(deps): bump actions/checkout from 5 to 6",
          "timestamp": "2025-11-26T12:11:07Z",
          "tree_id": "82e585d9c7c20ccd7c772ecc9869ea072e3c3cd1",
          "url": "https://github.com/jacderida/autonomi/commit/48bce6fe350208dc66245d5ce5f1924362944424"
        },
        "date": 1764203747199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 194,
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
          "id": "693b3922a721814b56c31bf33eec58bc17dcf048",
          "message": "Merge pull request #3326 from maidsafe/rc-2025.11.2\n\nchore(release): stable release `2025.11.2.1`",
          "timestamp": "2025-11-27T20:55:07Z",
          "tree_id": "683a139cd5efbabccf341aba7873b4860c4b6fba",
          "url": "https://github.com/jacderida/autonomi/commit/693b3922a721814b56c31bf33eec58bc17dcf048"
        },
        "date": 1764279060070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 203,
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
          "id": "dfc9800a4dae391893b1f0488f9cc6e0b4a35c21",
          "message": "Merge pull request #3328 from maidsafe/fix-bump_autonomi\n\nBump Crates",
          "timestamp": "2025-11-27T23:31:23Z",
          "tree_id": "ef0299a82fc77817879e4c28feab2f7a4ba7dcc6",
          "url": "https://github.com/jacderida/autonomi/commit/dfc9800a4dae391893b1f0488f9cc6e0b4a35c21"
        },
        "date": 1764356382140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 233,
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
          "id": "97af816ddac226a91d9b204677408264bdbedfb8",
          "message": "Merge pull request #3332 from jacderida/chore-python_publish_fixes\n\nfix(ci): Rewrite Python publish workflow following maturin best practices",
          "timestamp": "2025-11-28T19:24:09Z",
          "tree_id": "df5a19b50d2e7a281902c66a86998d14f46857e7",
          "url": "https://github.com/jacderida/autonomi/commit/97af816ddac226a91d9b204677408264bdbedfb8"
        },
        "date": 1764358848812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 270,
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
          "id": "c15af5a0ed3e0923beea90fe4d77e23f9c10ea54",
          "message": "Merge pull request #3357 from maidsafe/rc-2025.12.1\n\nchore(release): stable release 2025.12.1.1",
          "timestamp": "2025-12-11T22:21:12Z",
          "tree_id": "14072c198c646ce0b91ed4ba42b9cc8212775029",
          "url": "https://github.com/jacderida/autonomi/commit/c15af5a0ed3e0923beea90fe4d77e23f9c10ea54"
        },
        "date": 1765741724994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 250,
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
          "id": "657fa976183f04a808cf08d3beb1553a44f24a29",
          "message": "Merge pull request #3373 from maqi/make_get_storage_proofs_from_peer_return_PaymentQuote_for_release\n\nchore(client): make get_storage_proofs_from_peer return PaymentQuote",
          "timestamp": "2025-12-17T16:05:29Z",
          "tree_id": "46d2986dffb96061b7220ca0ceb575f96473dfd7",
          "url": "https://github.com/jacderida/autonomi/commit/657fa976183f04a808cf08d3beb1553a44f24a29"
        },
        "date": 1766011895451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 200,
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
          "id": "d7fe852c8660e8560a40062bf7b3e14e9cce5d35",
          "message": "Merge pull request #3384 from maqi/mutable_data_fall_back_DM_fetch\n\nfeat(client): using req/rsp DM as a fallback during mutable_data fetch",
          "timestamp": "2025-12-23T23:27:20Z",
          "tree_id": "2200bf0658f414052964b6eaebebc5095fd6aaed",
          "url": "https://github.com/jacderida/autonomi/commit/d7fe852c8660e8560a40062bf7b3e14e9cce5d35"
        },
        "date": 1766943209088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 190,
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
          "id": "2822430d8c752a7684fb2700745917d38b7f9563",
          "message": "Merge pull request #3391 from maqi/remove_peer_when_failed_to_fetch_version\n\nfeat(node): remove peer when failed to fetch version",
          "timestamp": "2026-01-05T13:01:01Z",
          "tree_id": "e1cde438f620b4e84a9ae6d489caf433002d3270",
          "url": "https://github.com/jacderida/autonomi/commit/2822430d8c752a7684fb2700745917d38b7f9563"
        },
        "date": 1767711912148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 214,
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
          "id": "1a4f46658ee2ec941e21d68baa6a90fe6e4318c4",
          "message": "Merge pull request #3376 from mickvandijke/feat-analytical-tools\n\nfeat: add developer query `closest-peers`",
          "timestamp": "2026-01-07T13:10:23Z",
          "tree_id": "a378e2fe33a70f13be8d887cc3d47c7a4f950e9b",
          "url": "https://github.com/jacderida/autonomi/commit/1a4f46658ee2ec941e21d68baa6a90fe6e4318c4"
        },
        "date": 1767796014680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory w/ `safe` benchmarks",
            "value": 221,
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
        "date": 1758118953978,
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
          "id": "9219a4ad565c1d97a77ee4ad156b6dc983e96d26",
          "message": "Merge pull request #3210 from grumbach/fix_analyze_old_datamap\n\nfix: analyze for old datamap types",
          "timestamp": "2025-09-25T16:30:02Z",
          "tree_id": "87d78d87abf088d6ea0eaeb2aa43c79b3069528e",
          "url": "https://github.com/jacderida/autonomi/commit/9219a4ad565c1d97a77ee4ad156b6dc983e96d26"
        },
        "date": 1758828828210,
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
          "id": "79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46",
          "message": "Merge pull request #3215 from maqi/avoid_unrecognized_DM_result_in_hanging\n\nfix: avoid unrecognized req/rsp DM result in hanging",
          "timestamp": "2025-09-29T16:16:05+01:00",
          "tree_id": "c6c8846960b3d7c2a2b9e2196549d484199b39a8",
          "url": "https://github.com/jacderida/autonomi/commit/79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46"
        },
        "date": 1759171057352,
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
          "id": "42e4500a3bc4f9531e686a2890abb6e61b26c149",
          "message": "Merge pull request #3226 from maidsafe/chore-alloy_publish_issue\n\nchore: bump `evmlib` to `0.4.4`",
          "timestamp": "2025-10-01T17:21:22+01:00",
          "tree_id": "545682b99c70573f11874ee52a83afe9e090f1cc",
          "url": "https://github.com/jacderida/autonomi/commit/42e4500a3bc4f9531e686a2890abb6e61b26c149"
        },
        "date": 1759350302934,
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
          "id": "8ae89414911d9ca9007df1d0ffd33a24576c224e",
          "message": "Merge pull request #3229 from jacderida/chore-remove_nightly_workflows\n\nchore: remove various nightly workflows",
          "timestamp": "2025-10-02T21:51:41+01:00",
          "tree_id": "0a5b9dc89a5345c509cb689534687d0900c6c71a",
          "url": "https://github.com/jacderida/autonomi/commit/8ae89414911d9ca9007df1d0ffd33a24576c224e"
        },
        "date": 1759501680956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 19,
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
          "id": "5e42bfe0fe8972f519eb1762c80f613d3042aeae",
          "message": "Merge pull request #3283 from maqi/transformed_json\n\nfeat(ant): analyze output flatten json as well",
          "timestamp": "2025-10-31T22:59:13Z",
          "tree_id": "0db903418adc1fb8cf3f1ea99b46c381c671fce9",
          "url": "https://github.com/jacderida/autonomi/commit/5e42bfe0fe8972f519eb1762c80f613d3042aeae"
        },
        "date": 1762301715096,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "01aef5794ab4d33560bc37c8886befb9a4f79a35",
          "message": "Merge pull request #3296 from RolandSherwin/recursive_analyze_public\n\nfix(ant): obtain the correct public archive addresses",
          "timestamp": "2025-11-08T12:37:50Z",
          "tree_id": "5f218c9fb2a81d86e8426aaf585799304afd09e3",
          "url": "https://github.com/jacderida/autonomi/commit/01aef5794ab4d33560bc37c8886befb9a4f79a35"
        },
        "date": 1762964757415,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "cf69006c64e534730ddab11cd5eaa0c7942c647c",
          "message": "Merge pull request #3301 from maqi/self_upgrade\n\nself restart",
          "timestamp": "2025-11-12T22:23:08Z",
          "tree_id": "ed348125b516ada31291743fdd63a9a967450ae0",
          "url": "https://github.com/jacderida/autonomi/commit/cf69006c64e534730ddab11cd5eaa0c7942c647c"
        },
        "date": 1762988348373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "66ec46ce23645a5e6c76f0005044de2a3b848297",
          "message": "Merge pull request #3299 from maqi/blind_scan\n\nfurther storage tracking facilities from the analyze tool",
          "timestamp": "2025-11-13T14:56:01Z",
          "tree_id": "f5d149922289ce9d088f4182af801f233e18e152",
          "url": "https://github.com/jacderida/autonomi/commit/66ec46ce23645a5e6c76f0005044de2a3b848297"
        },
        "date": 1763047323152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "cb56629bee1598c22735fbad44af3e0d957303b9",
          "message": "Merge pull request #3313 from maqi/remove_upload_fallback_approach\n\nfix(client): remove upload fallback approach",
          "timestamp": "2025-11-20T16:31:59Z",
          "tree_id": "5e4c79ae61d01e96e7946d9a665bc027304d2ee0",
          "url": "https://github.com/jacderida/autonomi/commit/cb56629bee1598c22735fbad44af3e0d957303b9"
        },
        "date": 1763768058877,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "b762a2e7aa97a7ba1a6c0bb637937578aa30377b",
          "message": "Merge pull request #3316 from jacderida/chore-new_clippy_fixes\n\nchore: upgrade `assert_cmd` reference",
          "timestamp": "2025-11-24T09:47:13Z",
          "tree_id": "15379df4172a3270c7e0cfb4b6fa6eb14d765245",
          "url": "https://github.com/jacderida/autonomi/commit/b762a2e7aa97a7ba1a6c0bb637937578aa30377b"
        },
        "date": 1764006783156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "4217a797dbf5e5a1df1a844998897ae7743a9f8c",
          "message": "Merge pull request #3282 from maidsafe/tweak_replication_criterias\n\nexpand replication range and fall-back network side replication",
          "timestamp": "2025-11-25T13:34:10Z",
          "tree_id": "0140d48354dee14db475b0301d301ad02b7371ea",
          "url": "https://github.com/jacderida/autonomi/commit/4217a797dbf5e5a1df1a844998897ae7743a9f8c"
        },
        "date": 1764080305399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "48bce6fe350208dc66245d5ce5f1924362944424",
          "message": "Merge pull request #3314 from maidsafe/dependabot/github_actions/actions/checkout-6\n\nchore(deps): bump actions/checkout from 5 to 6",
          "timestamp": "2025-11-26T12:11:07Z",
          "tree_id": "82e585d9c7c20ccd7c772ecc9869ea072e3c3cd1",
          "url": "https://github.com/jacderida/autonomi/commit/48bce6fe350208dc66245d5ce5f1924362944424"
        },
        "date": 1764203749016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "693b3922a721814b56c31bf33eec58bc17dcf048",
          "message": "Merge pull request #3326 from maidsafe/rc-2025.11.2\n\nchore(release): stable release `2025.11.2.1`",
          "timestamp": "2025-11-27T20:55:07Z",
          "tree_id": "683a139cd5efbabccf341aba7873b4860c4b6fba",
          "url": "https://github.com/jacderida/autonomi/commit/693b3922a721814b56c31bf33eec58bc17dcf048"
        },
        "date": 1764279061031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "dfc9800a4dae391893b1f0488f9cc6e0b4a35c21",
          "message": "Merge pull request #3328 from maidsafe/fix-bump_autonomi\n\nBump Crates",
          "timestamp": "2025-11-27T23:31:23Z",
          "tree_id": "ef0299a82fc77817879e4c28feab2f7a4ba7dcc6",
          "url": "https://github.com/jacderida/autonomi/commit/dfc9800a4dae391893b1f0488f9cc6e0b4a35c21"
        },
        "date": 1764356383425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "97af816ddac226a91d9b204677408264bdbedfb8",
          "message": "Merge pull request #3332 from jacderida/chore-python_publish_fixes\n\nfix(ci): Rewrite Python publish workflow following maturin best practices",
          "timestamp": "2025-11-28T19:24:09Z",
          "tree_id": "df5a19b50d2e7a281902c66a86998d14f46857e7",
          "url": "https://github.com/jacderida/autonomi/commit/97af816ddac226a91d9b204677408264bdbedfb8"
        },
        "date": 1764358850474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "c15af5a0ed3e0923beea90fe4d77e23f9c10ea54",
          "message": "Merge pull request #3357 from maidsafe/rc-2025.12.1\n\nchore(release): stable release 2025.12.1.1",
          "timestamp": "2025-12-11T22:21:12Z",
          "tree_id": "14072c198c646ce0b91ed4ba42b9cc8212775029",
          "url": "https://github.com/jacderida/autonomi/commit/c15af5a0ed3e0923beea90fe4d77e23f9c10ea54"
        },
        "date": 1765741726190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "657fa976183f04a808cf08d3beb1553a44f24a29",
          "message": "Merge pull request #3373 from maqi/make_get_storage_proofs_from_peer_return_PaymentQuote_for_release\n\nchore(client): make get_storage_proofs_from_peer return PaymentQuote",
          "timestamp": "2025-12-17T16:05:29Z",
          "tree_id": "46d2986dffb96061b7220ca0ceb575f96473dfd7",
          "url": "https://github.com/jacderida/autonomi/commit/657fa976183f04a808cf08d3beb1553a44f24a29"
        },
        "date": 1766011896699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "d7fe852c8660e8560a40062bf7b3e14e9cce5d35",
          "message": "Merge pull request #3384 from maqi/mutable_data_fall_back_DM_fetch\n\nfeat(client): using req/rsp DM as a fallback during mutable_data fetch",
          "timestamp": "2025-12-23T23:27:20Z",
          "tree_id": "2200bf0658f414052964b6eaebebc5095fd6aaed",
          "url": "https://github.com/jacderida/autonomi/commit/d7fe852c8660e8560a40062bf7b3e14e9cce5d35"
        },
        "date": 1766943210275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "2822430d8c752a7684fb2700745917d38b7f9563",
          "message": "Merge pull request #3391 from maqi/remove_peer_when_failed_to_fetch_version\n\nfeat(node): remove peer when failed to fetch version",
          "timestamp": "2026-01-05T13:01:01Z",
          "tree_id": "e1cde438f620b4e84a9ae6d489caf433002d3270",
          "url": "https://github.com/jacderida/autonomi/commit/2822430d8c752a7684fb2700745917d38b7f9563"
        },
        "date": 1767711913388,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
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
          "id": "1a4f46658ee2ec941e21d68baa6a90fe6e4318c4",
          "message": "Merge pull request #3376 from mickvandijke/feat-analytical-tools\n\nfeat: add developer query `closest-peers`",
          "timestamp": "2026-01-07T13:10:23Z",
          "tree_id": "a378e2fe33a70f13be8d887cc3d47c7a4f950e9b",
          "url": "https://github.com/jacderida/autonomi/commit/1a4f46658ee2ec941e21d68baa6a90fe6e4318c4"
        },
        "date": 1767796016293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Peak memory usage w/ upload",
            "value": 15,
            "unit": "MB"
          },
          {
            "name": "Average memory usage w/ upload",
            "value": 14,
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
        "date": 1758118956129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10014,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 20518,
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
          "id": "9219a4ad565c1d97a77ee4ad156b6dc983e96d26",
          "message": "Merge pull request #3210 from grumbach/fix_analyze_old_datamap\n\nfix: analyze for old datamap types",
          "timestamp": "2025-09-25T16:30:02Z",
          "tree_id": "87d78d87abf088d6ea0eaeb2aa43c79b3069528e",
          "url": "https://github.com/jacderida/autonomi/commit/9219a4ad565c1d97a77ee4ad156b6dc983e96d26"
        },
        "date": 1758828830020,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10158,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 21326,
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
          "id": "79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46",
          "message": "Merge pull request #3215 from maqi/avoid_unrecognized_DM_result_in_hanging\n\nfix: avoid unrecognized req/rsp DM result in hanging",
          "timestamp": "2025-09-29T16:16:05+01:00",
          "tree_id": "c6c8846960b3d7c2a2b9e2196549d484199b39a8",
          "url": "https://github.com/jacderida/autonomi/commit/79fc0b1c344f41166e88ce4d3eee7fdc9b3abb46"
        },
        "date": 1759171059141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 9181,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 19781,
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
          "id": "42e4500a3bc4f9531e686a2890abb6e61b26c149",
          "message": "Merge pull request #3226 from maidsafe/chore-alloy_publish_issue\n\nchore: bump `evmlib` to `0.4.4`",
          "timestamp": "2025-10-01T17:21:22+01:00",
          "tree_id": "545682b99c70573f11874ee52a83afe9e090f1cc",
          "url": "https://github.com/jacderida/autonomi/commit/42e4500a3bc4f9531e686a2890abb6e61b26c149"
        },
        "date": 1759350304299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 9844,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 20301,
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
          "id": "8ae89414911d9ca9007df1d0ffd33a24576c224e",
          "message": "Merge pull request #3229 from jacderida/chore-remove_nightly_workflows\n\nchore: remove various nightly workflows",
          "timestamp": "2025-10-02T21:51:41+01:00",
          "tree_id": "0a5b9dc89a5345c509cb689534687d0900c6c71a",
          "url": "https://github.com/jacderida/autonomi/commit/8ae89414911d9ca9007df1d0ffd33a24576c224e"
        },
        "date": 1759501682135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10392,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 21819,
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
          "id": "5e42bfe0fe8972f519eb1762c80f613d3042aeae",
          "message": "Merge pull request #3283 from maqi/transformed_json\n\nfeat(ant): analyze output flatten json as well",
          "timestamp": "2025-10-31T22:59:13Z",
          "tree_id": "0db903418adc1fb8cf3f1ea99b46c381c671fce9",
          "url": "https://github.com/jacderida/autonomi/commit/5e42bfe0fe8972f519eb1762c80f613d3042aeae"
        },
        "date": 1762301716996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10612,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 19331,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "01aef5794ab4d33560bc37c8886befb9a4f79a35",
          "message": "Merge pull request #3296 from RolandSherwin/recursive_analyze_public\n\nfix(ant): obtain the correct public archive addresses",
          "timestamp": "2025-11-08T12:37:50Z",
          "tree_id": "5f218c9fb2a81d86e8426aaf585799304afd09e3",
          "url": "https://github.com/jacderida/autonomi/commit/01aef5794ab4d33560bc37c8886befb9a4f79a35"
        },
        "date": 1762964759279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10865,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 20635,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "cf69006c64e534730ddab11cd5eaa0c7942c647c",
          "message": "Merge pull request #3301 from maqi/self_upgrade\n\nself restart",
          "timestamp": "2025-11-12T22:23:08Z",
          "tree_id": "ed348125b516ada31291743fdd63a9a967450ae0",
          "url": "https://github.com/jacderida/autonomi/commit/cf69006c64e534730ddab11cd5eaa0c7942c647c"
        },
        "date": 1762988349414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10634,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 19186,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "66ec46ce23645a5e6c76f0005044de2a3b848297",
          "message": "Merge pull request #3299 from maqi/blind_scan\n\nfurther storage tracking facilities from the analyze tool",
          "timestamp": "2025-11-13T14:56:01Z",
          "tree_id": "f5d149922289ce9d088f4182af801f233e18e152",
          "url": "https://github.com/jacderida/autonomi/commit/66ec46ce23645a5e6c76f0005044de2a3b848297"
        },
        "date": 1763047324323,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11601,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 21381,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "cb56629bee1598c22735fbad44af3e0d957303b9",
          "message": "Merge pull request #3313 from maqi/remove_upload_fallback_approach\n\nfix(client): remove upload fallback approach",
          "timestamp": "2025-11-20T16:31:59Z",
          "tree_id": "5e4c79ae61d01e96e7946d9a665bc027304d2ee0",
          "url": "https://github.com/jacderida/autonomi/commit/cb56629bee1598c22735fbad44af3e0d957303b9"
        },
        "date": 1763768060596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 6555,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 12215,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "b762a2e7aa97a7ba1a6c0bb637937578aa30377b",
          "message": "Merge pull request #3316 from jacderida/chore-new_clippy_fixes\n\nchore: upgrade `assert_cmd` reference",
          "timestamp": "2025-11-24T09:47:13Z",
          "tree_id": "15379df4172a3270c7e0cfb4b6fa6eb14d765245",
          "url": "https://github.com/jacderida/autonomi/commit/b762a2e7aa97a7ba1a6c0bb637937578aa30377b"
        },
        "date": 1764006784988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10993,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 20529,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "4217a797dbf5e5a1df1a844998897ae7743a9f8c",
          "message": "Merge pull request #3282 from maidsafe/tweak_replication_criterias\n\nexpand replication range and fall-back network side replication",
          "timestamp": "2025-11-25T13:34:10Z",
          "tree_id": "0140d48354dee14db475b0301d301ad02b7371ea",
          "url": "https://github.com/jacderida/autonomi/commit/4217a797dbf5e5a1df1a844998897ae7743a9f8c"
        },
        "date": 1764080306495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 9401,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 17622,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "48bce6fe350208dc66245d5ce5f1924362944424",
          "message": "Merge pull request #3314 from maidsafe/dependabot/github_actions/actions/checkout-6\n\nchore(deps): bump actions/checkout from 5 to 6",
          "timestamp": "2025-11-26T12:11:07Z",
          "tree_id": "82e585d9c7c20ccd7c772ecc9869ea072e3c3cd1",
          "url": "https://github.com/jacderida/autonomi/commit/48bce6fe350208dc66245d5ce5f1924362944424"
        },
        "date": 1764203750856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 9850,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 18036,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "693b3922a721814b56c31bf33eec58bc17dcf048",
          "message": "Merge pull request #3326 from maidsafe/rc-2025.11.2\n\nchore(release): stable release `2025.11.2.1`",
          "timestamp": "2025-11-27T20:55:07Z",
          "tree_id": "683a139cd5efbabccf341aba7873b4860c4b6fba",
          "url": "https://github.com/jacderida/autonomi/commit/693b3922a721814b56c31bf33eec58bc17dcf048"
        },
        "date": 1764279062068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 9487,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 17921,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "dfc9800a4dae391893b1f0488f9cc6e0b4a35c21",
          "message": "Merge pull request #3328 from maidsafe/fix-bump_autonomi\n\nBump Crates",
          "timestamp": "2025-11-27T23:31:23Z",
          "tree_id": "ef0299a82fc77817879e4c28feab2f7a4ba7dcc6",
          "url": "https://github.com/jacderida/autonomi/commit/dfc9800a4dae391893b1f0488f9cc6e0b4a35c21"
        },
        "date": 1764356384647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10995,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 20910,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "97af816ddac226a91d9b204677408264bdbedfb8",
          "message": "Merge pull request #3332 from jacderida/chore-python_publish_fixes\n\nfix(ci): Rewrite Python publish workflow following maturin best practices",
          "timestamp": "2025-11-28T19:24:09Z",
          "tree_id": "df5a19b50d2e7a281902c66a86998d14f46857e7",
          "url": "https://github.com/jacderida/autonomi/commit/97af816ddac226a91d9b204677408264bdbedfb8"
        },
        "date": 1764358852189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 9521,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 17384,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
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
          "id": "c15af5a0ed3e0923beea90fe4d77e23f9c10ea54",
          "message": "Merge pull request #3357 from maidsafe/rc-2025.12.1\n\nchore(release): stable release 2025.12.1.1",
          "timestamp": "2025-12-11T22:21:12Z",
          "tree_id": "14072c198c646ce0b91ed4ba42b9cc8212775029",
          "url": "https://github.com/jacderida/autonomi/commit/c15af5a0ed3e0923beea90fe4d77e23f9c10ea54"
        },
        "date": 1765741727494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10736,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 22560,
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
          "id": "657fa976183f04a808cf08d3beb1553a44f24a29",
          "message": "Merge pull request #3373 from maqi/make_get_storage_proofs_from_peer_return_PaymentQuote_for_release\n\nchore(client): make get_storage_proofs_from_peer return PaymentQuote",
          "timestamp": "2025-12-17T16:05:29Z",
          "tree_id": "46d2986dffb96061b7220ca0ceb575f96473dfd7",
          "url": "https://github.com/jacderida/autonomi/commit/657fa976183f04a808cf08d3beb1553a44f24a29"
        },
        "date": 1766011897977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10257,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 20701,
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
          "id": "d7fe852c8660e8560a40062bf7b3e14e9cce5d35",
          "message": "Merge pull request #3384 from maqi/mutable_data_fall_back_DM_fetch\n\nfeat(client): using req/rsp DM as a fallback during mutable_data fetch",
          "timestamp": "2025-12-23T23:27:20Z",
          "tree_id": "2200bf0658f414052964b6eaebebc5095fd6aaed",
          "url": "https://github.com/jacderida/autonomi/commit/d7fe852c8660e8560a40062bf7b3e14e9cce5d35"
        },
        "date": 1766943211536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 10467,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 21350,
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
          "id": "2822430d8c752a7684fb2700745917d38b7f9563",
          "message": "Merge pull request #3391 from maqi/remove_peer_when_failed_to_fetch_version\n\nfeat(node): remove peer when failed to fetch version",
          "timestamp": "2026-01-05T13:01:01Z",
          "tree_id": "e1cde438f620b4e84a9ae6d489caf433002d3270",
          "url": "https://github.com/jacderida/autonomi/commit/2822430d8c752a7684fb2700745917d38b7f9563"
        },
        "date": 1767711914708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "swarm_driver long handling times",
            "value": 11753,
            "unit": "hits"
          },
          {
            "name": "swarm_driver long handling total_time",
            "value": 23267,
            "unit": "ms"
          },
          {
            "name": "swarm_driver average long handling time",
            "value": 1,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}
<template>
  <div>
    <md-layout>
      <md-layout md-flex="25">
        <md-card>
          <md-card-header>
            <div class="md-title">My Funds</div>
          </md-card-header>

          <md-list>
            <md-list-item target="_blank" href="https://google.com">
              <span>Found 1</span>
            </md-list-item>
            <md-list-item>
              <span>Found 2</span>
            </md-list-item>
          </md-list>

          <md-layout md-align="end" md-vertical-align="end">
            <md-card-actions>
              <md-button>+ Add fund</md-button>
            </md-card-actions>
          </md-layout>
        </md-card>
      </md-layout>
      <md-layout>
        <md-card>
          <md-card-header>
            <div class="md-title">Resolutions</div>
          </md-card-header>

          <md-card-content>
            <md-table md-sort="support">
              <md-table-header>
                <md-table-row>
                  <md-table-head md-sort-by="companyName">Company</md-table-head>
                  <md-table-head md-tooltip="Progress on the resolution">Resolution</md-table-head>
                  <md-table-head md-tooltip="Resolution support state">Support</md-table-head>
                  <md-table-head md-sort-by="resolutionOrigin">Origin</md-table-head>
                </md-table-row>
              </md-table-header>

              <md-table-body>
                <md-table-row v-for="(row, rowIndex) in resolutions[selectedFound]" :key="rowIndex">
                  <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                    {{ column }}
                  </md-table-cell>
                </md-table-row>
              </md-table-body>
            </md-table>
          </md-card-content>
        </md-card>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      selectedFound: '01',
      funds: [
        {
          id: '01',
          name: 'ABC fund'
        },
        {
          id: '02',
          name: 'BCD fund'
        },
        {
          id: '03',
          name: 'CDE fund'
        }
      ],
      resolutions: {
        '01': [
          {
            companyName: '123 PLC',
            resolutionName: 'Board remuneration',
            support: 'no',
            origin: '123 PLC'
          },
          {
            companyName: '234 INC',
            resolutionName: 'Stop selling infant milk powder in regions with no safe water',
            support: 'yes',
            origin: 'SVCHLD'
          },
          {
            companyName: '345 AG',
            resolutionName: 'Another resolution1',
            support: 'pending',
            origin: 'AMNES'
          },
          {
            companyName: '567 SA',
            resolutionName: 'Another resolution2',
            support: 'yes',
            origin: 'GRNPC'
          },
          {
            companyName: '789 PLC',
            resolutionName: 'Another resolution3',
            support: 'yes',
            origin: 'OXFAM'
          },
          {
            companyName: '910 INC',
            resolutionName: 'Another resolution4',
            support: 'yes',
            origin: 'AMNES'
          },
          {
            companyName: '101 AG',
            resolutionName: 'Another resolution5',
            support: 'yes',
            origin: 'OXFAM'
          }
        ],
        '02': [
          {
            companyName: '1234 PLC',
            resolutionName: 'Board remuneration',
            support: 'no',
            origin: '123 PLC'
          },
          {
            companyName: '234 INC',
            resolutionName: 'Stop selling infant milk powder in regions with no safe water',
            support: 'yes',
            origin: 'SVCHLD'
          },
          {
            companyName: '345 AG',
            resolutionName: 'Another resolution1',
            support: 'pending',
            origin: 'AMNES'
          },
          {
            companyName: '567 SA',
            resolutionName: 'Another resolution2',
            support: 'yes',
            origin: 'GRNPC'
          },
          {
            companyName: '789 PLC',
            resolutionName: 'Another resolution3',
            support: 'yes',
            origin: 'OXFAM'
          },
          {
            companyName: '910 INC',
            resolutionName: 'Another resolution4',
            support: 'yes',
            origin: 'AMNES'
          },
          {
            companyName: '101 AG',
            resolutionName: 'Another resolution5',
            support: 'yes',
            origin: 'OXFAM'
          }
        ],
        '03': [
          {
            companyName: '1235 PLC',
            resolutionName: 'Board remuneration',
            support: 'no',
            origin: '123 PLC'
          },
          {
            companyName: '234 INC',
            resolutionName: 'Stop selling infant milk powder in regions with no safe water',
            support: 'yes',
            origin: 'SVCHLD'
          },
          {
            companyName: '345 AG',
            resolutionName: 'Another resolution1',
            support: 'pending',
            origin: 'AMNES'
          },
          {
            companyName: '567 SA',
            resolutionName: 'Another resolution2',
            support: 'yes',
            origin: 'GRNPC'
          },
          {
            companyName: '789 PLC',
            resolutionName: 'Another resolution3',
            support: 'yes',
            origin: 'OXFAM'
          },
          {
            companyName: '910 INC',
            resolutionName: 'Another resolution4',
            support: 'yes',
            origin: 'AMNES'
          },
          {
            companyName: '101 AG',
            resolutionName: 'Another resolution5',
            support: 'yes',
            origin: 'OXFAM'
          }
        ]
      }
    }
  }
}
</script>

<style css scoped>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
.md-card.md-theme-default {
  width: 100%;
}
</style>

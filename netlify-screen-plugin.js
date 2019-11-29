import React, { useEffect, useState } from "react"

export const NetlifyScreenPlugin = {
  __type: "screen",
  name: "Netlify",
  label: "Netlify",
  // layout: "fullscreen",
  Icon: () => null,
  Component: NetlifyScreen,
}

function NetlifyScreen() {
  const [site, setSite] = useState({ build_settings: {} })

  useEffect(() => {
    fetch("/netlify").then(async site => {
      setSite(await site.json())
    })
  }, [])

  return (
    <div>
      <ul>
        <li>
          <a href={site.admin_url} target="_blank">
            Admin
          </a>
        </li>
        <li>
          <a href={site.ssl_url} target="_blank">
            {site.ssl_url}
          </a>
        </li>
      </ul>

      <h2>Build Settings</h2>
      <table>
        <thead>
          <th>
            <td>Setting</td>
            <td>Value</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>Command</td>
            <td>{site.build_settings.cmd}</td>
          </tr>
          <tr>
            <td>Command</td>
            <td>{site.build_settings.cmd}</td>
          </tr>
          <tr>
            <td>dir</td>
            <td>{site.build_settings.dir}</td>
          </tr>
          <tr>
            <td>Repository</td>
            <td>
              <a href={site.build_settings.repo_url} target="_blank">
                {site.build_settings.repo_path}
              </a>
            </td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>{site.build_settings.repo_branch}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

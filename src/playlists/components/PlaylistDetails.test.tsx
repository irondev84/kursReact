// @vitest-environment jsdom

import { afterEach, expect, test, vi } from "vitest";
import PlaylistDetails from "./PlaylistDetails";
import { render, screen, cleanup, logRoles } from "@testing-library/react";
import { mockPlaylists } from "../../shared/fixtures/mockPlaylists";
import user from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

test("Renders example playlist", async () => {
  const playlist = mockPlaylists[0];

  const { container } = render(
    <PlaylistDetails playlist={playlist} onEdit={{} as any} />
  );

  expect(screen.queryByText("No playlist selected")).toBeNull();
});

test("Renders no playlist selected", async () => {
  // ARRANGE
  render(<PlaylistDetails onEdit={{} as any} />);

  screen.getByText("No playlist selected");
});

test("Trigger Edit mode when button clicked", async () => {
  const spy = vi.fn();

  const playlist = mockPlaylists[0];
  render(<PlaylistDetails playlist={playlist} onEdit={spy} />);

  const btn = screen.getByRole("button", { name: "Edit" });

  await user.click(btn);

  expect(spy).toHaveBeenCalledWith(playlist.id);
});

test.only("Switching playlists", async () => {
  const { rerender, container } = render(
    <PlaylistDetails playlist={mockPlaylists[0]} onEdit={{} as any} />
  );

  logRoles(container);

  // const publicElem = screen.getByRole("strong", { name: "playlist_public" });
  // expect(publicElem.innerText).toMatch("No");
  screen.getByText("No");

  rerender(<PlaylistDetails playlist={mockPlaylists[1]} onEdit={{} as any} />);

  screen.getByText("Yes");
});

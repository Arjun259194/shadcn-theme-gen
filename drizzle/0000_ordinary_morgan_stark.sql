CREATE TABLE `colorschemes` (
	`id` text PRIMARY KEY NOT NULL,
	`background` text NOT NULL,
	`foreground` text NOT NULL,
	`card` text NOT NULL,
	`card_foreground` text NOT NULL,
	`popover` text NOT NULL,
	`popover_foreground` text NOT NULL,
	`primary` text NOT NULL,
	`primary_foreground` text NOT NULL,
	`secondary` text NOT NULL,
	`secondary_foreground` text NOT NULL,
	`muted` text NOT NULL,
	`muted_foreground` text NOT NULL,
	`accent` text NOT NULL,
	`accent_foreground` text NOT NULL,
	`destructive` text NOT NULL,
	`destructive_foreground` text NOT NULL,
	`border` text NOT NULL,
	`input` text NOT NULL,
	`ring` text NOT NULL,
	`chart_1` text NOT NULL,
	`chart_2` text NOT NULL,
	`chart_3` text NOT NULL,
	`chart_4` text NOT NULL,
	`chart_5` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `account` (
	`userId` text NOT NULL,
	`type` text NOT NULL,
	`provider` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` integer,
	`token_type` text,
	`scope` text,
	`id_token` text,
	`session_state` text,
	PRIMARY KEY(`provider`, `providerAccountId`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `authenticator` (
	`credentialID` text NOT NULL,
	`userId` text NOT NULL,
	`providerAccountId` text NOT NULL,
	`credentialPublicKey` text NOT NULL,
	`counter` integer NOT NULL,
	`credentialDeviceType` text NOT NULL,
	`credentialBackedUp` integer NOT NULL,
	`transports` text,
	PRIMARY KEY(`userId`, `credentialID`),
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `authenticator_credentialID_unique` ON `authenticator` (`credentialID`);--> statement-breakpoint
CREATE TABLE `session` (
	`sessionToken` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text,
	`emailVerified` integer,
	`image` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` text NOT NULL,
	`token` text NOT NULL,
	`expires` integer NOT NULL,
	PRIMARY KEY(`identifier`, `token`)
);
--> statement-breakpoint
CREATE TABLE `themes` (
	`id` text PRIMARY KEY NOT NULL,
	`useId` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`darkId` text NOT NULL,
	`lightId` text NOT NULL,
	FOREIGN KEY (`useId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`darkId`) REFERENCES `colorschemes`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`lightId`) REFERENCES `colorschemes`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `themes_darkId_unique` ON `themes` (`darkId`);--> statement-breakpoint
CREATE UNIQUE INDEX `themes_lightId_unique` ON `themes` (`lightId`);
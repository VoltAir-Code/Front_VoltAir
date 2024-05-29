
CREATE DATABASE [dbVoltaire]
GO

USE [dbVoltaire]
GO

/****** Object:  Table [dbo].[Carros]    Script Date: 24/05/2024 08:37:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Carros](
	[idCarro] [uniqueidentifier] NOT NULL,
	[idMarca] [uniqueidentifier] NULL,
	[idRegistro] [uniqueidentifier] NULL,
	[modelo] [varchar](255) NULL,
	[placa] [varchar](255) NULL,
	[DurBateria] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[idCarro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Marca]    Script Date: 24/05/2024 08:37:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Marca](
	[idMarca] [uniqueidentifier] NOT NULL,
	[nomeMarca] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[idMarca] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registros]    Script Date: 24/05/2024 08:37:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registros](
	[idRegistro] [uniqueidentifier] NOT NULL,
	[UltimaRecarga] [datetime] NULL,
	[DuracaoRecarga] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[idRegistro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 24/05/2024 08:37:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[idUsuario] [uniqueidentifier] NOT NULL,
	[idCarro] [uniqueidentifier] NULL,
	[nome] [varchar](255) NOT NULL,
	[email] [varchar](255) NOT NULL,
	[senha] [varchar](255) NOT NULL,
	[foto] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Carros]  WITH CHECK ADD  CONSTRAINT [FK_Carros_Marca] FOREIGN KEY([idMarca])
REFERENCES [dbo].[Marca] ([idMarca])
GO
ALTER TABLE [dbo].[Carros] CHECK CONSTRAINT [FK_Carros_Marca]
GO
ALTER TABLE [dbo].[Carros]  WITH CHECK ADD  CONSTRAINT [FK_Carros_Registros] FOREIGN KEY([idRegistro])
REFERENCES [dbo].[Registros] ([idRegistro])
GO
ALTER TABLE [dbo].[Carros] CHECK CONSTRAINT [FK_Carros_Registros]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD  CONSTRAINT [FK_Usuarios_Carros] FOREIGN KEY([idCarro])
REFERENCES [dbo].[Carros] ([idCarro])
GO
ALTER TABLE [dbo].[Usuarios] CHECK CONSTRAINT [FK_Usuarios_Carros]
GO
USE [master]
GO
ALTER DATABASE [dbVoltaire] SET  READ_WRITE 
GO
